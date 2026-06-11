import { Response } from 'express';
import { ReportsService } from './reports.service';
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    getSales(from?: string, to?: string, type?: string): Promise<({
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
    exportSales(from: string | undefined, to: string | undefined, type: string | undefined, res: Response): Promise<void>;
    getConsumptions(from?: string, to?: string, userId?: string, pensionerType?: string): Promise<({
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
    exportConsumptions(from: string | undefined, to: string | undefined, userId: string | undefined, pensionerType: string | undefined, res: Response): Promise<void>;
    getSummary(from?: string, to?: string): Promise<{
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
    getMovements(from?: string, to?: string, userId?: string, type?: string): Promise<({
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
    exportMovements(from: string | undefined, to: string | undefined, userId: string | undefined, type: string | undefined, res: Response): Promise<void>;
}
