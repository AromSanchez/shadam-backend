import { IsString, IsNumber, IsOptional, IsEnum } from 'class-validator';
import { Categoria } from '../../../generated/prisma/client';
import { Transform } from 'class-transformer';

export class CreateProductoDto {
  @IsString()
  nombre!: string;

  @IsOptional()
  @IsString()
  descripcion?: string;

  @Transform(({ value }) => parseFloat(value))
  @IsNumber()
  precio!: number;

  @IsEnum(Categoria)
  categoria!: Categoria;
}