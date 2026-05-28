import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import {
  CustomerType,
  OrderStatus,
  OrderType,
  PaymentMethod,
} from '../../generated/prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { RegisterPaymentDto } from './dto/register-payment.dto';
import { OrderItemDto } from './dto/order-item.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

type BuiltOrderItem = {
  productoId: number;
  quantity: number;
  unitPrice: number;
  subtotal: number;
  isTakeaway: boolean;
};

const orderInclude = {
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
    orderBy: {
      createdAt: 'asc' as const,
    },
  },
};

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
export class OrdersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateOrderDto) {
    this.validateOrderTarget(dto.type, dto.tableNumber);

    const customerType = dto.customerType ?? CustomerType.REGULAR;
    const pensionerId =
      customerType === CustomerType.PENSIONER ? dto.pensionerId : null;

    await this.validatePensioner(customerType, pensionerId ?? undefined);

    const items = await this.buildOrderItems(dto.items);
    const total = this.sumItems(items);

    return this.prisma.order.create({
      data: {
        type: dto.type,
        tableNumber: dto.type === OrderType.MESA ? dto.tableNumber : null,
        customerType,
        pensionerId,
        notes: dto.notes,
        total,
        items: {
          create: items,
        },
      },
      include: orderInclude,
    });
  }

  findAll() {
    return this.prisma.order.findMany({
      where: {
        status: {
          in: [OrderStatus.ACTIVE, OrderStatus.CONFIRMED],
        },
      },
      include: orderInclude,
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findOne(id: string) {
    const order = await this.prisma.order.findUnique({
      where: { id },
      include: orderInclude,
    });

    if (!order) throw new NotFoundException('Pedido no encontrado');

    return order;
  }

  async update(id: string, dto: UpdateOrderDto) {
    const current = await this.findOne(id);
    const type = dto.type ?? current.type;
    const customerType = dto.customerType ?? current.customerType;
    const pensionerId =
      customerType === CustomerType.PENSIONER
        ? dto.pensionerId ?? current.pensionerId ?? undefined
        : null;

    this.validateOrderTarget(type, dto.tableNumber ?? current.tableNumber ?? undefined);
    await this.validatePensioner(customerType, pensionerId ?? undefined);

    const items = dto.items ? await this.buildOrderItems(dto.items) : undefined;
    const total = items ? this.sumItems(items) : Number(current.total);

    return this.prisma.$transaction(async (tx) => {
      if (items) {
        await tx.orderItem.deleteMany({
          where: { orderId: id },
        });
      }

      return tx.order.update({
        where: { id },
        data: {
          type,
          tableNumber: type === OrderType.MESA ? dto.tableNumber ?? current.tableNumber : null,
          customerType,
          pensionerId,
          notes: dto.notes ?? current.notes,
          total,
          items: items
            ? {
                create: items,
              }
            : undefined,
        },
        include: orderInclude,
      });
    });
  }

  async remove(id: string) {
    await this.findOne(id);

    await this.prisma.order.delete({
      where: { id },
    });

    return { message: 'Pedido eliminado' };
  }

  async confirm(id: string) {
    await this.findOne(id);

    return this.prisma.order.update({
      where: { id },
      data: { status: OrderStatus.CONFIRMED },
      include: orderInclude,
    });
  }

  async checkout(id: string, dto: RegisterPaymentDto) {
    return this.prisma.$transaction(async (tx) => {
      const order = await tx.order.findUnique({
        where: { id },
        include: orderInclude,
      });

      if (!order) throw new NotFoundException('Pedido no encontrado');
      if (order.items.length === 0) {
        throw new BadRequestException('El pedido no tiene productos');
      }

      this.validatePayments(dto.payments, Number(order.total));

      const customerLabel =
        order.type === OrderType.MESA
          ? `Mesa ${order.tableNumber}`
          : 'Para llevar';

      const sale = await tx.sale.create({
        data: {
          sourceOrderId: order.id,
          type: order.type,
          tableNumber: order.tableNumber,
          customerType: order.customerType,
          pensionerId: order.pensionerId,
          customerLabel,
          total: order.total,
          items: {
            create: order.items.map((item) => ({
              productoId: item.productoId,
              productName: item.producto.nombre,
              quantity: item.quantity,
              unitPrice: item.unitPrice,
              subtotal: item.subtotal,
              isTakeaway: item.isTakeaway,
            })),
          },
          payments: {
            create: dto.payments.map((payment) => ({
              method: payment.method,
              amount: this.toMoney(payment.amount),
            })),
          },
        },
        include: saleInclude,
      });

      await tx.order.delete({
        where: { id },
      });

      return sale;
    });
  }

  private validateOrderTarget(type: OrderType, tableNumber?: string) {
    if (type === OrderType.MESA && !tableNumber?.trim()) {
      throw new BadRequestException('El numero de mesa es obligatorio');
    }
  }

  private async validatePensioner(customerType?: CustomerType, pensionerId?: number) {
    if (customerType !== CustomerType.PENSIONER && !pensionerId) return;

    if (!pensionerId) {
      throw new BadRequestException('El pensionista debe tener un usuario asociado');
    }

    const pensioner = await this.prisma.user.findUnique({
      where: { id: pensionerId },
      select: {
        id: true,
        role: true,
        is_active: true,
      },
    });

    if (!pensioner || pensioner.role !== 'pensioner') {
      throw new BadRequestException('Pensionista no valido');
    }

    if (!pensioner.is_active) {
      throw new BadRequestException('El pensionista no esta activo');
    }
  }

  private async buildOrderItems(items: OrderItemDto[]) {
    if (!items?.length) {
      throw new BadRequestException('El pedido debe tener al menos un producto');
    }

    const orderItems: BuiltOrderItem[] = [];

    for (const item of items) {
      const menuItem = await this.prisma.menusProductos.findFirst({
        where: {
          productoId: item.productoId,
          visible: true,
          menu: {
            activo: true,
          },
        },
        include: {
          producto: true,
        },
      });

      if (!menuItem) {
        throw new BadRequestException(
          `Producto ${item.productoId} no esta disponible en el menu actual`,
        );
      }

      const unitPrice = Number(menuItem.producto.precio);
      const subtotal = this.toMoney(unitPrice * item.quantity);

      orderItems.push({
        productoId: item.productoId,
        quantity: item.quantity,
        unitPrice: this.toMoney(unitPrice),
        subtotal,
        isTakeaway: item.isTakeaway,
      });
    }

    return orderItems;
  }

  private sumItems(items: Array<{ subtotal: number }>) {
    return this.toMoney(
      items.reduce((total, item) => total + Number(item.subtotal), 0),
    );
  }

  private validatePayments(
    payments: Array<{ method: PaymentMethod; amount: number }>,
    total: number,
  ) {
    if (!payments?.length) {
      throw new BadRequestException('Debe registrar al menos un pago');
    }

    const paymentTotal = payments.reduce((sum, payment) => sum + payment.amount, 0);
    const paymentCents = this.toCents(paymentTotal);
    const totalCents = this.toCents(total);

    if (paymentCents > totalCents) {
      throw new BadRequestException('La suma de pagos no puede exceder el total');
    }

    if (paymentCents !== totalCents) {
      throw new BadRequestException('La suma de pagos debe ser igual al total');
    }
  }

  private toMoney(value: number) {
    return Math.round(value * 100) / 100;
  }

  private toCents(value: number) {
    return Math.round(value * 100);
  }
}
