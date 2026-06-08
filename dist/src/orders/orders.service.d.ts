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
            email: string;
            id: number;
            name: string;
            role: string;
        } | null;
        items: ({
            producto: {
                id: number;
                nombre: string;
                descripcion: string | null;
                precio: import("@prisma/client-runtime-utils").Decimal;
                categoria: import("../../generated/prisma/enums").Categoria;
                imagen: string | null;
                createdAt: Date;
                updatedAt: Date;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            productoId: number;
            quantity: number;
            isTakeaway: boolean;
            unitPrice: import("@prisma/client-runtime-utils").Decimal;
            subtotal: import("@prisma/client-runtime-utils").Decimal;
            orderId: string;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        type: OrderType;
        tableNumber: string | null;
        customerType: CustomerType;
        pensionerId: number | null;
        notes: string | null;
        status: OrderStatus;
        total: import("@prisma/client-runtime-utils").Decimal;
    }>;
    findAll(): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<({
        pensioner: {
            email: string;
            id: number;
            name: string;
            role: string;
        } | null;
        items: ({
            producto: {
                id: number;
                nombre: string;
                descripcion: string | null;
                precio: import("@prisma/client-runtime-utils").Decimal;
                categoria: import("../../generated/prisma/enums").Categoria;
                imagen: string | null;
                createdAt: Date;
                updatedAt: Date;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            productoId: number;
            quantity: number;
            isTakeaway: boolean;
            unitPrice: import("@prisma/client-runtime-utils").Decimal;
            subtotal: import("@prisma/client-runtime-utils").Decimal;
            orderId: string;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        type: OrderType;
        tableNumber: string | null;
        customerType: CustomerType;
        pensionerId: number | null;
        notes: string | null;
        status: OrderStatus;
        total: import("@prisma/client-runtime-utils").Decimal;
    })[]>;
    findOne(id: string): Promise<{
        pensioner: {
            email: string;
            id: number;
            name: string;
            role: string;
        } | null;
        items: ({
            producto: {
                id: number;
                nombre: string;
                descripcion: string | null;
                precio: import("@prisma/client-runtime-utils").Decimal;
                categoria: import("../../generated/prisma/enums").Categoria;
                imagen: string | null;
                createdAt: Date;
                updatedAt: Date;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            productoId: number;
            quantity: number;
            isTakeaway: boolean;
            unitPrice: import("@prisma/client-runtime-utils").Decimal;
            subtotal: import("@prisma/client-runtime-utils").Decimal;
            orderId: string;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        type: OrderType;
        tableNumber: string | null;
        customerType: CustomerType;
        pensionerId: number | null;
        notes: string | null;
        status: OrderStatus;
        total: import("@prisma/client-runtime-utils").Decimal;
    }>;
    update(id: string, dto: UpdateOrderDto): Promise<{
        pensioner: {
            email: string;
            id: number;
            name: string;
            role: string;
        } | null;
        items: ({
            producto: {
                id: number;
                nombre: string;
                descripcion: string | null;
                precio: import("@prisma/client-runtime-utils").Decimal;
                categoria: import("../../generated/prisma/enums").Categoria;
                imagen: string | null;
                createdAt: Date;
                updatedAt: Date;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            productoId: number;
            quantity: number;
            isTakeaway: boolean;
            unitPrice: import("@prisma/client-runtime-utils").Decimal;
            subtotal: import("@prisma/client-runtime-utils").Decimal;
            orderId: string;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        type: OrderType;
        tableNumber: string | null;
        customerType: CustomerType;
        pensionerId: number | null;
        notes: string | null;
        status: OrderStatus;
        total: import("@prisma/client-runtime-utils").Decimal;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
    confirm(id: string): Promise<{
        pensioner: {
            email: string;
            id: number;
            name: string;
            role: string;
        } | null;
        items: ({
            producto: {
                id: number;
                nombre: string;
                descripcion: string | null;
                precio: import("@prisma/client-runtime-utils").Decimal;
                categoria: import("../../generated/prisma/enums").Categoria;
                imagen: string | null;
                createdAt: Date;
                updatedAt: Date;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            productoId: number;
            quantity: number;
            isTakeaway: boolean;
            unitPrice: import("@prisma/client-runtime-utils").Decimal;
            subtotal: import("@prisma/client-runtime-utils").Decimal;
            orderId: string;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        type: OrderType;
        tableNumber: string | null;
        customerType: CustomerType;
        pensionerId: number | null;
        notes: string | null;
        status: OrderStatus;
        total: import("@prisma/client-runtime-utils").Decimal;
    }>;
    checkout(id: string, dto: RegisterPaymentDto): Promise<{
        pensioner: {
            email: string;
            id: number;
            name: string;
            role: string;
        } | null;
        items: ({
            producto: {
                id: number;
                nombre: string;
                descripcion: string | null;
                precio: import("@prisma/client-runtime-utils").Decimal;
                categoria: import("../../generated/prisma/enums").Categoria;
                imagen: string | null;
                createdAt: Date;
                updatedAt: Date;
            };
        } & {
            id: string;
            createdAt: Date;
            productoId: number;
            quantity: number;
            isTakeaway: boolean;
            unitPrice: import("@prisma/client-runtime-utils").Decimal;
            subtotal: import("@prisma/client-runtime-utils").Decimal;
            productName: string;
            saleId: string;
        })[];
        payments: {
            id: string;
            createdAt: Date;
            method: PaymentMethod;
            amount: import("@prisma/client-runtime-utils").Decimal;
            saleId: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        type: OrderType;
        tableNumber: string | null;
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
