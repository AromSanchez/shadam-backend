import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from '../auth/dto/create-user.dto';
import * as bcrypt from 'bcrypt';

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
}