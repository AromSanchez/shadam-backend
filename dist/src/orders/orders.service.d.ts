import { CustomerType, OrderStatus, OrderType, PaymentMethod } from '../../generated/prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { RegisterPaymentDto } from './dto/register-payment.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
export declare class OrdersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateOrderDto): Promise<{
        pensioner: {
            id: number;
            name: string;
            email: string;
            role: string;
        } | null;
        items: ({
            producto: {
                id: number;
                nombre: string;
                descripcion: string | null;
                precio: import("@prisma/client-runtime-utils").Decimal;
                imagen: string | null;
                categoria: import("../../generated/prisma/enums").Categoria;
                createdAt: Date;
                updatedAt: Date;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            productoId: number;
            orderId: string;
            quantity: number;
            unitPrice: import("@prisma/client-runtime-utils").Decimal;
            subtotal: import("@prisma/client-runtime-utils").Decimal;
            isTakeaway: boolean;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        tableNumber: string | null;
        type: OrderType;
        customerType: CustomerType;
        pensionerId: number | null;
        status: OrderStatus;
        total: import("@prisma/client-runtime-utils").Decimal;
        notes: string | null;
    }>;
    findAll(): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<({
        pensioner: {
            id: number;
            name: string;
            email: string;
            role: string;
        } | null;
        items: ({
            producto: {
                id: number;
                nombre: string;
                descripcion: string | null;
                precio: import("@prisma/client-runtime-utils").Decimal;
                imagen: string | null;
                categoria: import("../../generated/prisma/enums").Categoria;
                createdAt: Date;
                updatedAt: Date;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            productoId: number;
            orderId: string;
            quantity: number;
            unitPrice: import("@prisma/client-runtime-utils").Decimal;
            subtotal: import("@prisma/client-runtime-utils").Decimal;
            isTakeaway: boolean;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        tableNumber: string | null;
        type: OrderType;
        customerType: CustomerType;
        pensionerId: number | null;
        status: OrderStatus;
        total: import("@prisma/client-runtime-utils").Decimal;
        notes: string | null;
    })[]>;
    findOne(id: string): Promise<{
        pensioner: {
            id: number;
            name: string;
            email: string;
            role: string;
        } | null;
        items: ({
            producto: {
                id: number;
                nombre: string;
                descripcion: string | null;
                precio: import("@prisma/client-runtime-utils").Decimal;
                imagen: string | null;
                categoria: import("../../generated/prisma/enums").Categoria;
                createdAt: Date;
                updatedAt: Date;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            productoId: number;
            orderId: string;
            quantity: number;
            unitPrice: import("@prisma/client-runtime-utils").Decimal;
            subtotal: import("@prisma/client-runtime-utils").Decimal;
            isTakeaway: boolean;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        tableNumber: string | null;
        type: OrderType;
        customerType: CustomerType;
        pensionerId: number | null;
        status: OrderStatus;
        total: import("@prisma/client-runtime-utils").Decimal;
        notes: string | null;
    }>;
    update(id: string, dto: UpdateOrderDto): Promise<{
        pensioner: {
            id: number;
            name: string;
            email: string;
            role: string;
        } | null;
        items: ({
            producto: {
                id: number;
                nombre: string;
                descripcion: string | null;
                precio: import("@prisma/client-runtime-utils").Decimal;
                imagen: string | null;
                categoria: import("../../generated/prisma/enums").Categoria;
                createdAt: Date;
                updatedAt: Date;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            productoId: number;
            orderId: string;
            quantity: number;
            unitPrice: import("@prisma/client-runtime-utils").Decimal;
            subtotal: import("@prisma/client-runtime-utils").Decimal;
            isTakeaway: boolean;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        tableNumber: string | null;
        type: OrderType;
        customerType: CustomerType;
        pensionerId: number | null;
        status: OrderStatus;
        total: import("@prisma/client-runtime-utils").Decimal;
        notes: string | null;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
    confirm(id: string): Promise<{
        pensioner: {
            id: number;
            name: string;
            email: string;
            role: string;
        } | null;
        items: ({
            producto: {
                id: number;
                nombre: string;
                descripcion: string | null;
                precio: import("@prisma/client-runtime-utils").Decimal;
                imagen: string | null;
                categoria: import("../../generated/prisma/enums").Categoria;
                createdAt: Date;
                updatedAt: Date;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            productoId: number;
            orderId: string;
            quantity: number;
            unitPrice: import("@prisma/client-runtime-utils").Decimal;
            subtotal: import("@prisma/client-runtime-utils").Decimal;
            isTakeaway: boolean;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        tableNumber: string | null;
        type: OrderType;
        customerType: CustomerType;
        pensionerId: number | null;
        status: OrderStatus;
        total: import("@prisma/client-runtime-utils").Decimal;
        notes: string | null;
    }>;
    checkout(id: string, dto: RegisterPaymentDto): Promise<{
        pensioner: {
            id: number;
            name: string;
            email: string;
            role: string;
        } | null;
        items: ({
            producto: {
                id: number;
                nombre: string;
                descripcion: string | null;
                precio: import("@prisma/client-runtime-utils").Decimal;
                imagen: string | null;
                categoria: import("../../generated/prisma/enums").Categoria;
                createdAt: Date;
                updatedAt: Date;
            };
        } & {
            id: string;
            createdAt: Date;
            productoId: number;
            quantity: number;
            unitPrice: import("@prisma/client-runtime-utils").Decimal;
            subtotal: import("@prisma/client-runtime-utils").Decimal;
            isTakeaway: boolean;
            saleId: string;
            productName: string;
        })[];
        payments: {
            id: string;
            createdAt: Date;
            saleId: string;
            method: PaymentMethod;
            amount: import("@prisma/client-runtime-utils").Decimal;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        tableNumber: string | null;
        type: OrderType;
        customerType: CustomerType;
        pensionerId: number | null;
        total: import("@prisma/client-runtime-utils").Decimal;
        sourceOrderId: string | null;
        customerLabel: string | null;
        soldAt: Date;
    }>;
    private validateOrderTarget;
    private validatePensioner;
    private buildOrderItems;
    private sumItems;
    private validatePayments;
    private toMoney;
    private toCents;
}
