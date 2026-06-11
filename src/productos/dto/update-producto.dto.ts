import { IsString, IsNumber, IsOptional, IsEnum } from 'class-validator';
import { Categoria } from '../../../generated/prisma/client';
import { Transform } from 'class-transformer';

export class UpdateProductoDto {
  @IsOptional()
  @IsString()
  nombre?: string;

  @IsOptional()
  @IsString()
  descripcion?: string;

  @IsOptional()
  @Transform(({ value }) => parseFloat(value))
  @IsNumber()
  precio?: number;

  @IsOptional()
  @IsEnum(Categoria)
  categoria?: Categoria;
}
