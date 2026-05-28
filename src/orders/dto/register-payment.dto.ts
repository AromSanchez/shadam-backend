import { Transform, Type } from 'class-transformer';
import { IsArray, IsEnum, IsNumber, IsPositive, ValidateNested } from 'class-validator';
import { PaymentMethod } from '../../../generated/prisma/client';

export class PaymentInputDto {
  @IsEnum(PaymentMethod)
  method!: PaymentMethod;

  @Transform(({ value }) => Number(value))
  @IsNumber({ maxDecimalPlaces: 2 })
  @IsPositive()
  amount!: number;
}

export class RegisterPaymentDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PaymentInputDto)
  payments!: PaymentInputDto[];
}
