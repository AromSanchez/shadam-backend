import { Type } from 'class-transformer';
import { IsArray, IsEnum, IsInt, IsOptional, IsString, ValidateIf, ValidateNested } from 'class-validator';
import { CustomerType, OrderType } from '../../../generated/prisma/client';
import { OrderItemDto } from './order-item.dto';

export class CreateOrderDto {
  @IsEnum(OrderType)
  type!: OrderType;

  @ValidateIf((dto: CreateOrderDto) => dto.type === OrderType.MESA)
  @IsString()
  tableNumber?: string;

  @IsOptional()
  @IsEnum(CustomerType)
  customerType?: CustomerType;

  @IsOptional()
  @IsInt()
  pensionerId?: number;

  @IsOptional()
  @IsString()
  notes?: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OrderItemDto)
  items!: OrderItemDto[];
}
