import { Categoria } from '../../../generated/prisma/client';
export declare class CreateProductoDto {
    nombre: string;
    descripcion?: string;
    precio: number;
    categoria: Categoria;
}
