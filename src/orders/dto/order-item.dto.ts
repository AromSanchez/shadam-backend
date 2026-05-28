import { Transform } from 'class-transformer';
import { IsBoolean, IsInt, IsPositive } from 'class-validator';

export class OrderItemDto {
  @Transform(({ value }) => Number(value))
  @IsInt()
  @IsPositive()
  productoId!: number;

  @Transform(({ value }) => Number(value))
  @IsInt()
  @IsPositive()
  quantity!: number;

  @IsBoolean()
  isTakeaway!: boolean;
}
