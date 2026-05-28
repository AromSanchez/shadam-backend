import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from '../auth/dto/create-user.dto';
import * as bcrypt from 'bcrypt';

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
}
