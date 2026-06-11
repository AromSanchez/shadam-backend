import { PrismaService } from '../prisma/prisma.service';
import { MealType } from '../../generated/prisma/client';
export declare class ConfigService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getAllPrices(): Promise<Record<string, number>>;
    updatePrice(mealType: MealType, price: number): Promise<{
        id: string;
        updatedAt: Date;
        mealType: MealType;
        price: import("@prisma/client-runtime-utils").Decimal;
    }>;
    updateAllPrices(prices: {
        desayuno?: number;
        almuerzo?: number;
        cena?: number;
    }): Promise<Record<string, number>>;
}
