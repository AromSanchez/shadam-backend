import { PrismaService } from '../prisma/prisma.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
export declare class ProductosService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateProductoDto, imagenUrl?: string): import("../../generated/prisma/models").Prisma__ProductoClient<{
        id: number;
        nombre: string;
        descripcion: string | null;
        precio: import("@prisma/client-runtime-utils").Decimal;
        imagen: string | null;
        categoria: import("../../generated/prisma/enums").Categoria;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    findAll(): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: number;
        nombre: string;
        descripcion: string | null;
        precio: import("@prisma/client-runtime-utils").Decimal;
        imagen: string | null;
        categoria: import("../../generated/prisma/enums").Categoria;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: number): import("../../generated/prisma/models").Prisma__ProductoClient<{
        id: number;
        nombre: string;
        descripcion: string | null;
        precio: import("@prisma/client-runtime-utils").Decimal;
        imagen: string | null;
        categoria: import("../../generated/prisma/enums").Categoria;
        createdAt: Date;
        updatedAt: Date;
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    update(id: number, dto: UpdateProductoDto, imagenUrl?: string): Promise<{
        id: number;
        nombre: string;
        descripcion: string | null;
        precio: import("@prisma/client-runtime-utils").Decimal;
        imagen: string | null;
        categoria: import("../../generated/prisma/enums").Categoria;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
