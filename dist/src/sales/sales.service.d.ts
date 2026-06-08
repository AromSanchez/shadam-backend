import { PrismaService } from '../prisma/prisma.service';
export declare class SalesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<({
        pensioner: {
            email: string;
            id: number;
            name: string;
            role: string;
        } | null;
        payments: {
            id: string;
            createdAt: Date;
            method: import("../../generated/prisma/enums").PaymentMethod;
            amount: import("@prisma/client-runtime-utils").Decimal;
            saleId: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        type: import("../../generated/prisma/enums").OrderType;
        tableNumber: string | null;
        customerType: import("../../generated/prisma/enums").CustomerType;
        pensionerId: number | null;
        total: import("@prisma/client-runtime-utils").Decimal;
        sourceOrderId: string | null;
        customerLabel: string | null;
        soldAt: Date;
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
            method: import("../../generated/prisma/enums").PaymentMethod;
            amount: import("@prisma/client-runtime-utils").Decimal;
            saleId: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        type: import("../../generated/prisma/enums").OrderType;
        tableNumber: string | null;
        customerType: import("../../generated/prisma/enums").CustomerType;
        pensionerId: number | null;
        total: import("@prisma/client-runtime-utils").Decimal;
        sourceOrderId: string | null;
        customerLabel: string | null;
        soldAt: Date;
    }>;
}
