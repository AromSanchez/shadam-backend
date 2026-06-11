import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { MealType } from '../../generated/prisma/client';

@Injectable()
export class ConfigService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Get all price configurations
   */
  async getAllPrices() {
    const configs = await this.prisma.priceConfig.findMany({
      orderBy: { mealType: 'asc' },
    });

    // Return with defaults if not configured
    const mealTypes: MealType[] = [MealType.DESAYUNO, MealType.ALMUERZO, MealType.CENA];
    const result: Record<string, number> = {};

    for (const type of mealTypes) {
      const config = configs.find(c => c.mealType === type);
      result[type] = config ? Number(config.price) : 0;
    }

    return result;
  }

  /**
   * Update price for a meal type (upsert)
   */
  async updatePrice(mealType: MealType, price: number) {
    return this.prisma.priceConfig.upsert({
      where: { mealType },
      update: { price },
      create: { mealType, price },
    });
  }

  /**
   * Update all prices at once
   */
  async updateAllPrices(prices: { desayuno?: number; almuerzo?: number; cena?: number }) {
    const updates: Promise<any>[] = [];

    if (prices.desayuno !== undefined) {
      updates.push(this.updatePrice(MealType.DESAYUNO, prices.desayuno));
    }
    if (prices.almuerzo !== undefined) {
      updates.push(this.updatePrice(MealType.ALMUERZO, prices.almuerzo));
    }
    if (prices.cena !== undefined) {
      updates.push(this.updatePrice(MealType.CENA, prices.cena));
    }

    await Promise.all(updates);
    return this.getAllPrices();
  }
}
