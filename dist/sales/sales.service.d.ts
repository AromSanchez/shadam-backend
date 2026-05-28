import { PrismaService } from '../prisma/prisma.service';
export declare class SalesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<({
        pensioner: {
            id: number;
            name: string;
            email: string;
            role: string;
        } | null;
        payments: {
            id: string;
            createdAt: Date;
            saleId: string;
            method: import("../../generated/prisma/enums").PaymentMethod;
            amount: import("@prisma/client-runtime-utils").Decimal;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        tableNumber: string | null;
        type: import("../../generated/prisma/enums").OrderType;
        customerType: import("../../generated/prisma/enums").CustomerType;
        pensionerId: number | null;
        total: import("@prisma/client-runtime-utils").Decimal;
        sourceOrderId: string | null;
        customerLabel: string | null;
        soldAt: Date;
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
            method: import("../../generated/prisma/enums").PaymentMethod;
            amount: import("@prisma/client-runtime-utils").Decimal;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        tableNumber: string | null;
        type: import("../../generated/prisma/enums").OrderType;
        customerType: import("../../generated/prisma/enums").CustomerType;
        pensionerId: number | null;
        total: import("@prisma/client-runtime-utils").Decimal;
        sourceOrderId: string | null;
        customerLabel: string | null;
        soldAt: Date;
    }>;
}
