import { PrismaService } from '../prisma/prisma.service';
import { MealType, PensionerType } from '../../generated/prisma/client';
export declare class ConsumptionsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    register(userId: number, mealType: MealType): Promise<{
        message: string;
        user: {
            id: number;
            name: string;
            pensioner_type: PensionerType | null;
            balance: import("@prisma/client-runtime-utils").Decimal;
        };
        id: string;
        createdAt: Date;
        amount: import("@prisma/client-runtime-utils").Decimal;
        userId: number;
        mealType: MealType;
        date: Date;
    }>;
    findByUser(userId: number): Promise<{
        id: string;
        createdAt: Date;
        amount: import("@prisma/client-runtime-utils").Decimal;
        userId: number;
        mealType: MealType;
        date: Date;
    }[]>;
    findTodayByUser(userId: number): Promise<{
        id: string;
        createdAt: Date;
        amount: import("@prisma/client-runtime-utils").Decimal;
        userId: number;
        mealType: MealType;
        date: Date;
    }[]>;
    validateByQrToken(qrToken: string): Promise<{
        todayConsumptions: MealType[];
        id: number;
        name: string;
        email: string;
        role: string;
        pensioner_type: PensionerType | null;
        qr_token: string | null;
        balance: import("@prisma/client-runtime-utils").Decimal;
        is_active: boolean;
    }>;
    getStats(userId: number): Promise<{
        totalConsumed: number;
        totalCharged: number;
        history: Record<string, {
            meals: string[];
            totalCharged: number;
        }>;
    }>;
}
