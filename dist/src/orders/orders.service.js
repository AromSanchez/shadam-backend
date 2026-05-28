"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("../../generated/prisma/client");
const prisma_service_1 = require("../prisma/prisma.service");
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
            createdAt: 'asc',
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
let OrdersService = class OrdersService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto) {
        this.validateOrderTarget(dto.type, dto.tableNumber);
        const customerType = dto.customerType ?? client_1.CustomerType.REGULAR;
        const pensionerId = customerType === client_1.CustomerType.PENSIONER ? dto.pensionerId : null;
        await this.validatePensioner(customerType, pensionerId ?? undefined);
        const items = await this.buildOrderItems(dto.items);
        const total = this.sumItems(items);
        return this.prisma.order.create({
            data: {
                type: dto.type,
                tableNumber: dto.type === client_1.OrderType.MESA ? dto.tableNumber : null,
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
                    in: [client_1.OrderStatus.ACTIVE, client_1.OrderStatus.CONFIRMED],
                },
            },
            include: orderInclude,
            orderBy: {
                createdAt: 'desc',
            },
        });
    }
    async findOne(id) {
        const order = await this.prisma.order.findUnique({
            where: { id },
            include: orderInclude,
        });
        if (!order)
            throw new common_1.NotFoundException('Pedido no encontrado');
        return order;
    }
    async update(id, dto) {
        const current = await this.findOne(id);
        const type = dto.type ?? current.type;
        const customerType = dto.customerType ?? current.customerType;
        const pensionerId = customerType === client_1.CustomerType.PENSIONER
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
                    tableNumber: type === client_1.OrderType.MESA ? dto.tableNumber ?? current.tableNumber : null,
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
    async remove(id) {
        await this.findOne(id);
        await this.prisma.order.delete({
            where: { id },
        });
        return { message: 'Pedido eliminado' };
    }
    async confirm(id) {
        await this.findOne(id);
        return this.prisma.order.update({
            where: { id },
            data: { status: client_1.OrderStatus.CONFIRMED },
            include: orderInclude,
        });
    }
    async checkout(id, dto) {
        return this.prisma.$transaction(async (tx) => {
            const order = await tx.order.findUnique({
                where: { id },
                include: orderInclude,
            });
            if (!order)
                throw new common_1.NotFoundException('Pedido no encontrado');
            if (order.items.length === 0) {
                throw new common_1.BadRequestException('El pedido no tiene productos');
            }
            this.validatePayments(dto.payments, Number(order.total));
            const customerLabel = order.type === client_1.OrderType.MESA
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
    validateOrderTarget(type, tableNumber) {
        if (type === client_1.OrderType.MESA && !tableNumber?.trim()) {
            throw new common_1.BadRequestException('El numero de mesa es obligatorio');
        }
    }
    async validatePensioner(customerType, pensionerId) {
        if (customerType !== client_1.CustomerType.PENSIONER && !pensionerId)
            return;
        if (!pensionerId) {
            throw new common_1.BadRequestException('El pensionista debe tener un usuario asociado');
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
            throw new common_1.BadRequestException('Pensionista no valido');
        }
        if (!pensioner.is_active) {
            throw new common_1.BadRequestException('El pensionista no esta activo');
        }
    }
    async buildOrderItems(items) {
        if (!items?.length) {
            throw new common_1.BadRequestException('El pedido debe tener al menos un producto');
        }
        const orderItems = [];
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
                throw new common_1.BadRequestException(`Producto ${item.productoId} no esta disponible en el menu actual`);
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
    sumItems(items) {
        return this.toMoney(items.reduce((total, item) => total + Number(item.subtotal), 0));
    }
    validatePayments(payments, total) {
        if (!payments?.length) {
            throw new common_1.BadRequestException('Debe registrar al menos un pago');
        }
        const paymentTotal = payments.reduce((sum, payment) => sum + payment.amount, 0);
        const paymentCents = this.toCents(paymentTotal);
        const totalCents = this.toCents(total);
        if (paymentCents > totalCents) {
            throw new common_1.BadRequestException('La suma de pagos no puede exceder el total');
        }
        if (paymentCents !== totalCents) {
            throw new common_1.BadRequestException('La suma de pagos debe ser igual al total');
        }
    }
    toMoney(value) {
        return Math.round(value * 100) / 100;
    }
    toCents(value) {
        return Math.round(value * 100);
    }
};
exports.OrdersService = OrdersService;
exports.OrdersService = OrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OrdersService);
//# sourceMappingURL=orders.service.js.map