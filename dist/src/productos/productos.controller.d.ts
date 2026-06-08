import { ProductosService } from './productos.service';
import { CreateProductoDto } from './dto/create-producto.dto';
export declare class ProductosController {
    private readonly productosService;
    constructor(productosService: ProductosService);
    create(dto: CreateProductoDto, file: Express.Multer.File): import("../../generated/prisma/models").Prisma__ProductoClient<{
        id: number;
        nombre: string;
        descripcion: string | null;
        precio: import("@prisma/client-runtime-utils").Decimal;
        categoria: import("../../generated/prisma/enums").Categoria;
        imagen: string | null;
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
        categoria: import("../../generated/prisma/enums").Categoria;
        imagen: string | null;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: string): import("../../generated/prisma/models").Prisma__ProductoClient<{
        id: number;
        nombre: string;
        descripcion: string | null;
        precio: import("@prisma/client-runtime-utils").Decimal;
        categoria: import("../../generated/prisma/enums").Categoria;
        imagen: string | null;
        createdAt: Date;
        updatedAt: Date;
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
}
