import { Categoria } from '../../../generated/prisma/client';
export declare class UpdateProductoDto {
    nombre?: string;
    descripcion?: string;
    precio?: number;
    categoria?: Categoria;
}
