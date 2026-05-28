import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

const saleInclude = {
  pensioner: {
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
    },
  },
  items: {
    include: {
      producto: true,
    },
  },
  payments: true,
};

@Injectable()
export class SalesService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.sale.findMany({
      include: {
        payments: true,
        pensioner: {
          select: {
            id: true,
            name: true,
            email: true,
            role: true,
          },
        },
      },
      orderBy: {
        soldAt: 'desc',
      },
    });
  }

  async findOne(id: string) {
    const sale = await this.prisma.sale.findUnique({
      where: { id },
      include: saleInclude,
    });

    if (!sale) throw new NotFoundException('Venta no encontrada');

    return sale;
  }
}
