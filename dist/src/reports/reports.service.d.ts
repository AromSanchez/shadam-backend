import { PrismaService } from '../prisma/prisma.service';
export interface SalesFilter {
    from?: string;
    to?: string;
    type?: string;
}
export interface ConsumptionsFilter {
    from?: string;
    to?: string;
    userId?: number;
    pensionerType?: string;
}
export interface MovementsFilter {
    from?: string;
    to?: string;
    userId?: number;
    type?: string;
}
export interface SummaryFilter {
    from?: string;
    to?: string;
}
export declare class ReportsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getSales(filter: SalesFilter): Promise<({
        pensioner: {
            id: number;
            name: string;
            email: string;
            pensioner_type: import("../../generated/prisma/enums").PensionerType | null;
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
            } | null;
        } & {
            id: string;
            createdAt: Date;
            productoId: number | null;
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
    })[]>;
    exportSales(filter: SalesFilter): Promise<Buffer>;
    getConsumptions(filter: ConsumptionsFilter): Promise<({
        user: {
            id: number;
            name: string;
            email: string;
            pensioner_type: import("../../generated/prisma/enums").PensionerType | null;
            balance: import("@prisma/client-runtime-utils").Decimal;
        };
    } & {
        id: string;
        createdAt: Date;
        amount: import("@prisma/client-runtime-utils").Decimal;
        userId: number;
        mealType: import("../../generated/prisma/enums").MealType;
        date: Date;
    })[]>;
    exportConsumptions(filter: ConsumptionsFilter): Promise<Buffer>;
    getSummary(filter: SummaryFilter): Promise<{
        sales: {
            totalCount: number;
            totalRevenue: number;
            byType: {
                type: import("../../generated/prisma/enums").OrderType;
                count: number;
                total: number;
            }[];
            byPaymentMethod: {
                method: import("../../generated/prisma/enums").PaymentMethod;
                count: number;
                total: number;
            }[];
        };
        consumptions: {
            totalCount: number;
            totalCharged: number;
            byPensionerType: Record<string, {
                count: number;
                total: number;
            }>;
        };
    }>;
    getMovements(filter: MovementsFilter): Promise<({
        user: {
            id: number;
            name: string;
            email: string;
            pensioner_type: import("../../generated/prisma/enums").PensionerType | null;
        };
    } & {
        id: string;
        balance: import("@prisma/client-runtime-utils").Decimal;
        createdAt: Date;
        type: import("../../generated/prisma/enums").MovementType;
        amount: import("@prisma/client-runtime-utils").Decimal;
        userId: number;
        description: string | null;
    })[]>;
    exportMovements(filter: MovementsFilter): Promise<Buffer>;
    private styleHeader;
}
