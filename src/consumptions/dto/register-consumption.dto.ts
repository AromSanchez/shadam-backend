import { IsEnum, IsInt } from 'class-validator';
import { MealType } from '../../../generated/prisma/client';

export class RegisterConsumptionDto {
  @IsInt()
  userId!: number;

  @IsEnum(MealType)
  mealType!: MealType;
}
