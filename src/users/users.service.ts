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

const pensionerSelect = {
  id: true,
  name: true,
  email: true,
  role: true,
  balance: true,
  first_login: true,
  is_active: true,
  created_at: true,
  updated_at: true,
};

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async createPensioner(dto: CreateUserDto) {
    const existing = await this.prisma.user.findUnique({
      where: { email: dto.dni },
    });

    if (existing) throw new ConflictException('Ya existe un usuario con ese DNI');

    const hashed = await bcrypt.hash(dto.dni, 10);

    const user = await this.prisma.user.create({
      data: {
        name: dto.name,
        email: dto.dni,
        password: hashed,
        role: 'pensioner',
        first_login: true,
        is_active: true,
        balance: 0,
      },
    });

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    };
  }

  async findPensioners() {
    return this.prisma.user.findMany({
      where: { role: 'pensioner' },
      select: pensionerSelect,
      orderBy: { created_at: 'desc' },
    });
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
   * Adds the given amount to the current balance.
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

    return this.prisma.user.update({
      where: { id },
      data: { balance: newBalance },
      select: pensionerSelect,
    });
  }

  /**
   * Consume balance from a pensionista (used when registering a pensionista order).
   * Deducts the given amount from the current balance.
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

    return {
      ...updated,
      consumed: amount,
      description: description || 'Consumo de pedido',
    };
  }
}
