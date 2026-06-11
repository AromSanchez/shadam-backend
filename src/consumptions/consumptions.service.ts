import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { MealType, PensionerType } from '../../generated/prisma/client';
import { Decimal } from '../../generated/prisma/internal/prismaNamespace';

// Fixed price for students: charged per 3 consumptions
const STUDENT_CHARGE_PER_3 = 16.66;

@Injectable()
export class ConsumptionsService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Register a consumption for a pensionista.
   * - TRABAJADOR: immediately deducted the configured price for that meal.
   * - ESTUDIANTE: charged 16.66 every 3 consumptions (regardless of meal type).
   */
  async register(userId: number, mealType: MealType) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        role: true,
        is_active: true,
        pensioner_type: true,
        balance: true,
        name: true,
      },
    });

    if (!user) throw new NotFoundException('Pensionista no encontrado');
    if (user.role !== 'pensioner') throw new BadRequestException('El usuario no es pensionista');
    if (!user.is_active) throw new BadRequestException('El pensionista no está activo');
    if (!user.pensioner_type) throw new BadRequestException('El pensionista no tiene tipo asignado');

    // Check if already consumed this meal today
    const todayStart = new Date();
    todayStart.setHours(0, 0, 0, 0);
    const todayEnd = new Date();
    todayEnd.setHours(23, 59, 59, 999);

    const existingToday = await this.prisma.consumption.findFirst({
      where: {
        userId,
        mealType,
        date: { gte: todayStart, lte: todayEnd },
      },
    });

    if (existingToday) {
      throw new BadRequestException(
        `El pensionista ya consumió ${mealType.toLowerCase()} hoy`,
      );
    }

    let amountCharged = new Decimal(0);

    if (user.pensioner_type === PensionerType.TRABAJADOR) {
      // Get configured price for this meal
      const priceConfig = await this.prisma.priceConfig.findUnique({
        where: { mealType },
      });

      if (!priceConfig) {
        throw new BadRequestException(
          `No hay precio configurado para ${mealType.toLowerCase()}`,
        );
      }

      amountCharged = new Decimal(priceConfig.price);

      // Check sufficient balance
      if (new Decimal(user.balance).lessThan(amountCharged)) {
        throw new BadRequestException(
          `Saldo insuficiente. Saldo: S/ ${new Decimal(user.balance).toFixed(2)}, Costo: S/ ${amountCharged.toFixed(2)}`,
        );
      }

      // Deduct immediately
      await this.prisma.user.update({
        where: { id: userId },
        data: { balance: new Decimal(user.balance).minus(amountCharged) },
      });
    } else {
      // ESTUDIANTE: check if this will be the 3rd consumption → charge
      const totalConsumptions = await this.prisma.consumption.count({
        where: { userId },
      });

      // After this one, total will be totalConsumptions + 1
      const afterThis = totalConsumptions + 1;

      if (afterThis % 3 === 0) {
        // Time to charge
        amountCharged = new Decimal(STUDENT_CHARGE_PER_3);

        if (new Decimal(user.balance).lessThan(amountCharged)) {
          throw new BadRequestException(
            `Saldo insuficiente. Con este consumo se completan 3 y se cobra S/ ${STUDENT_CHARGE_PER_3}. Saldo actual: S/ ${new Decimal(user.balance).toFixed(2)}`,
          );
        }

        await this.prisma.user.update({
          where: { id: userId },
          data: { balance: new Decimal(user.balance).minus(amountCharged) },
        });
      }
    }

    // Create consumption record
    const consumption = await this.prisma.consumption.create({
      data: {
        userId,
        mealType,
        amount: amountCharged,
        date: new Date(),
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            balance: true,
            pensioner_type: true,
          },
        },
      },
    });

    return {
      ...consumption,
      message: amountCharged.greaterThan(0)
        ? `Consumo registrado. Se descontó S/ ${amountCharged.toFixed(2)}`
        : 'Consumo registrado. Sin descuento aún.',
    };
  }

  /**
   * Get consumption history for a pensionista
   */
  async findByUser(userId: number) {
    return this.prisma.consumption.findMany({
      where: { userId },
      orderBy: { date: 'desc' },
      take: 100,
    });
  }

  /**
   * Get today's consumptions for a pensionista
   */
  async findTodayByUser(userId: number) {
    const todayStart = new Date();
    todayStart.setHours(0, 0, 0, 0);
    const todayEnd = new Date();
    todayEnd.setHours(23, 59, 59, 999);

    return this.prisma.consumption.findMany({
      where: {
        userId,
        date: { gte: todayStart, lte: todayEnd },
      },
      orderBy: { date: 'asc' },
    });
  }

  /**
   * Validate a pensionista by QR token
   */
  async validateByQrToken(qrToken: string) {
    const user = await this.prisma.user.findUnique({
      where: { qr_token: qrToken },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        pensioner_type: true,
        balance: true,
        is_active: true,
        qr_token: true,
      },
    });

    if (!user) throw new NotFoundException('Código QR inválido');
    if (user.role !== 'pensioner') throw new BadRequestException('El código no corresponde a un pensionista');
    if (!user.is_active) throw new BadRequestException('El pensionista no está activo');

    // Get today's consumptions
    const todayStart = new Date();
    todayStart.setHours(0, 0, 0, 0);
    const todayEnd = new Date();
    todayEnd.setHours(23, 59, 59, 999);

    const todayConsumptions = await this.prisma.consumption.findMany({
      where: {
        userId: user.id,
        date: { gte: todayStart, lte: todayEnd },
      },
    });

    return {
      ...user,
      todayConsumptions: todayConsumptions.map(c => c.mealType),
    };
  }

  /**
   * Get consumption stats grouped by date for a user
   */
  async getStats(userId: number) {
    const consumptions = await this.prisma.consumption.findMany({
      where: { userId },
      orderBy: { date: 'desc' },
      take: 90, // last ~3 months
    });

    // Group by date
    const grouped: Record<string, { meals: string[]; totalCharged: number }> = {};
    for (const c of consumptions) {
      const dateKey = c.date.toISOString().split('T')[0];
      if (!grouped[dateKey]) {
        grouped[dateKey] = { meals: [], totalCharged: 0 };
      }
      grouped[dateKey].meals.push(c.mealType);
      grouped[dateKey].totalCharged += Number(c.amount);
    }

    const totalConsumed = consumptions.length;
    const totalCharged = consumptions.reduce((sum, c) => sum + Number(c.amount), 0);

    return {
      totalConsumed,
      totalCharged,
      history: grouped,
    };
  }
}
