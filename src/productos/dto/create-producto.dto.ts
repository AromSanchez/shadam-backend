import { IsString, IsNumber, IsOptional, IsEnum } from 'class-validator';
import { Categoria } from '../../../generated/prisma/client';

export class CreateProductoDto {
  @IsString()
  nombre!: string;

  @IsOptional()
  @IsString()
  descripcion?: string;

  @IsNumber()
  precio!: number;

  @IsOptional()
  @IsString()
  imagen?: string;

  @IsEnum(Categoria)
  categoria!: Categoria;
}