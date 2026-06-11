import { ConsumptionsService } from './consumptions.service';
import { RegisterConsumptionDto } from './dto/register-consumption.dto';
export declare class ConsumptionsController {
    private readonly consumptionsService;
    constructor(consumptionsService: ConsumptionsService);
    register(dto: RegisterConsumptionDto): Promise<{
        message: string;
        user: {
            id: number;
            name: string;
            pensioner_type: import("../../generated/prisma/enums").PensionerType | null;
            balance: import("@prisma/client-runtime-utils").Decimal;
        };
        id: string;
        createdAt: Date;
        amount: import("@prisma/client-runtime-utils").Decimal;
        userId: number;
        mealType: import("../../generated/prisma/enums").MealType;
        date: Date;
    }>;
    validateQr(body: {
        qrToken: string;
    }): Promise<{
        todayConsumptions: import("../../generated/prisma/enums").MealType[];
        id: number;
        name: string;
        email: string;
        role: string;
        pensioner_type: import("../../generated/prisma/enums").PensionerType | null;
        qr_token: string | null;
        balance: import("@prisma/client-runtime-utils").Decimal;
        is_active: boolean;
    }>;
    findByUser(userId: number): Promise<{
        id: string;
        createdAt: Date;
        amount: import("@prisma/client-runtime-utils").Decimal;
        userId: number;
        mealType: import("../../generated/prisma/enums").MealType;
        date: Date;
    }[]>;
    findTodayByUser(userId: number): Promise<{
        id: string;
        createdAt: Date;
        amount: import("@prisma/client-runtime-utils").Decimal;
        userId: number;
        mealType: import("../../generated/prisma/enums").MealType;
        date: Date;
    }[]>;
    getStats(userId: number): Promise<{
        totalConsumed: number;
        totalCharged: number;
        history: Record<string, {
            meals: string[];
            totalCharged: number;
        }>;
    }>;
    findMyHistory(req: any): Promise<{
        id: string;
        createdAt: Date;
        amount: import("@prisma/client-runtime-utils").Decimal;
        userId: number;
        mealType: import("../../generated/prisma/enums").MealType;
        date: Date;
    }[]>;
    findMyToday(req: any): Promise<{
        id: string;
        createdAt: Date;
        amount: import("@prisma/client-runtime-utils").Decimal;
        userId: number;
        mealType: import("../../generated/prisma/enums").MealType;
        date: Date;
    }[]>;
    getMyStats(req: any): Promise<{
        totalConsumed: number;
        totalCharged: number;
        history: Record<string, {
            meals: string[];
            totalCharged: number;
        }>;
    }>;
}
