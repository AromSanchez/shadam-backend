import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from '../auth/dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { Decimal } from '../../generated/prisma/internal/prismaNamespace';
import { PensionerType } from '../../generated/prisma/client';

const pensionerSelect = {
  id: true,
  name: true,
  email: true,
  role: true,
  pensioner_type: true,
  qr_token: true,
  balance: true,
  first_login: true,
  is_active: true,
  created_at: true,
  updated_at: true,
};

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  /**
   * Generate a unique QR token for a pensionista
   * Format: PEN-001, PEN-002, PEN-003... (autoincremental)
   */
  private async generateQrToken(): Promise<string> {
    // Find the highest existing PEN-XXX number
    const lastUser = await this.prisma.user.findFirst({
      where: {
        qr_token: { startsWith: 'PEN-' },
      },
      orderBy: { id: 'desc' },
      select: { qr_token: true },
    });

    let nextNum = 1;

    if (lastUser?.qr_token) {
      const match = lastUser.qr_token.match(/^PEN-(\d+)$/);
      if (match) {
        nextNum = parseInt(match[1], 10) + 1;
      } else {
        // If format doesn't match (old tokens), count total pensioners
        const count = await this.prisma.user.count({
          where: { qr_token: { startsWith: 'PEN-' } },
        });
        nextNum = count + 1;
      }
    }

    // Pad to at least 3 digits
    const token = `PEN-${String(nextNum).padStart(3, '0')}`;

    // Verify uniqueness (shouldn't fail but just in case)
    const exists = await this.prisma.user.findUnique({ where: { qr_token: token } });
    if (exists) {
      // Fallback: find next available
      for (let i = nextNum + 1; i < nextNum + 100; i++) {
        const t = `PEN-${String(i).padStart(3, '0')}`;
        const taken = await this.prisma.user.findUnique({ where: { qr_token: t } });
        if (!taken) return t;
      }
    }

    return token;
  }

  async createPensioner(dto: CreateUserDto) {
    const existing = await this.prisma.user.findUnique({
      where: { email: dto.dni },
    });

    if (existing) throw new ConflictException('Ya existe un usuario con ese DNI');

    const hashed = await bcrypt.hash(dto.dni, 10);

    // Generate unique QR token (autoincremental)
    const qrToken = await this.generateQrToken();

    const user = await this.prisma.user.create({
      data: {
        name: dto.name,
        email: dto.dni,
        password: hashed,
        role: 'pensioner',
        pensioner_type: dto.pensioner_type as PensionerType || PensionerType.ESTUDIANTE,
        qr_token: qrToken,
        first_login: true,
        is_active: true,
        balance: 0,
      },
      select: pensionerSelect,
    });

    return user;
  }

  async findPensioners() {
    return this.prisma.user.findMany({
      where: { role: 'pensioner' },
      select: pensionerSelect,
      orderBy: { created_at: 'desc' },
    });
  }

  async findPensionerById(id: number) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      select: pensionerSelect,
    });

    if (!user) throw new NotFoundException('Pensionista no encontrado');
    if (user.role !== 'pensioner') throw new BadRequestException('El usuario no es pensionista');

    return user;
  }

  async togglePensioner(id: number) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        role: true,
        is_active: true,
      },
    });

    if (!user) throw new NotFoundException('Usuario no encontrado');

    if (user.role !== 'pensioner') {
      throw new BadRequestException('Solo se pueden activar o desactivar usuarios pensionistas');
    }

    return this.prisma.user.update({
      where: { id },
      data: { is_active: !user.is_active },
      select: pensionerSelect,
    });
  }

  /**
   * Recharge a pensionista's balance (admin only).
   */
  async rechargeBalance(id: number, amount: number) {
    if (!amount || amount <= 0) {
      throw new BadRequestException('El monto debe ser mayor a 0');
    }

    const user = await this.prisma.user.findUnique({
      where: { id },
      select: { id: true, role: true, balance: true },
    });

    if (!user) throw new NotFoundException('Usuario no encontrado');
    if (user.role !== 'pensioner') {
      throw new BadRequestException('Solo se puede recargar saldo a pensionistas');
    }

    const newBalance = new Decimal(user.balance).plus(new Decimal(amount));

    const updated = await this.prisma.user.update({
      where: { id },
      data: { balance: newBalance },
      select: pensionerSelect,
    });

    // Register balance movement
    await this.prisma.balanceMovement.create({
      data: {
        userId: id,
        type: 'RECARGA',
        amount: amount,
        balance: newBalance,
        description: `Recarga de saldo +S/ ${amount.toFixed(2)}`,
      },
    });

    return updated;
  }

  /**
   * Consume balance from a pensionista.
   */
  async consumeBalance(id: number, amount: number, description?: string) {
    if (!amount || amount <= 0) {
      throw new BadRequestException('El monto debe ser mayor a 0');
    }

    const user = await this.prisma.user.findUnique({
      where: { id },
      select: { id: true, role: true, balance: true, name: true },
    });

    if (!user) throw new NotFoundException('Usuario no encontrado');
    if (user.role !== 'pensioner') {
      throw new BadRequestException('Solo se puede consumir saldo de pensionistas');
    }

    const currentBalance = new Decimal(user.balance);
    if (currentBalance.lessThan(new Decimal(amount))) {
      throw new BadRequestException(
        `Saldo insuficiente. Saldo actual: S/ ${currentBalance.toFixed(2)}, monto requerido: S/ ${amount.toFixed(2)}`,
      );
    }

    const newBalance = currentBalance.minus(new Decimal(amount));

    const updated = await this.prisma.user.update({
      where: { id },
      data: { balance: newBalance },
      select: pensionerSelect,
    });

    // Register balance movement
    await this.prisma.balanceMovement.create({
      data: {
        userId: id,
        type: 'CONSUMO',
        amount: -amount,
        balance: newBalance,
        description: description || 'Consumo de pedido',
      },
    });

    return {
      ...updated,
      consumed: amount,
      description: description || 'Consumo de pedido',
    };
  }

  /**
   * Update pensionista profile (email and/or password) - used for first login setup
   */
  async updateProfile(id: number, data: { email?: string; password?: string }) {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) throw new NotFoundException('Usuario no encontrado');

    const updateData: Record<string, any> = {};

    if (data.email) {
      // Check email uniqueness
      const existing = await this.prisma.user.findUnique({ where: { email: data.email } });
      if (existing && existing.id !== id) {
        throw new ConflictException('Ya existe un usuario con ese correo');
      }
      updateData.email = data.email;
    }

    if (data.password) {
      updateData.password = await bcrypt.hash(data.password, 10);
    }

    // Mark first_login as false after profile update
    updateData.first_login = false;

    return this.prisma.user.update({
      where: { id },
      data: updateData,
      select: pensionerSelect,
    });
  }

  /**
   * Skip onboarding (mark first_login as false without changing credentials)
   */
  async skipOnboarding(id: number) {
    return this.prisma.user.update({
      where: { id },
      data: { first_login: false },
      select: pensionerSelect,
    });
  }

  /**
   * Get balance movements for a pensionista
   */
  async getMovements(id: number, limit: number = 50) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      select: { id: true, role: true, name: true, balance: true },
    });

    if (!user) throw new NotFoundException('Usuario no encontrado');

    const movements = await this.prisma.balanceMovement.findMany({
      where: { userId: id },
      orderBy: { createdAt: 'desc' },
      take: limit,
    });

    return {
      user: { id: user.id, name: user.name, balance: user.balance },
      movements,
    };
  }
}
