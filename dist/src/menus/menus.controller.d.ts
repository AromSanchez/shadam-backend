import { MenusService } from './menus.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { AddProductoToMenuDto } from './dto/add-producto-to-menu.dto';
export declare class MenusController {
    private readonly menusService;
    constructor(menusService: MenusService);
    create(dto: CreateMenuDto): Promise<{
        id: string;
        nombre: string;
        createdAt: Date;
        updatedAt: Date;
        activo: boolean;
    }>;
    findAll(): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<({
        productos: ({
            producto: {
                id: number;
                nombre: string;
                descripcion: string | null;
                precio: import("@prisma/client-runtime-utils").Decimal;
                imagen: string | null;
                categoria: import("../../generated/prisma/enums").Categoria;
                createdAt: Date;
                updatedAt: Date;
            };
        } & {
            id: string;
            createdAt: Date;
            menuId: string;
            productoId: number;
            visible: boolean;
        })[];
    } & {
        id: string;
        nombre: string;
        createdAt: Date;
        updatedAt: Date;
        activo: boolean;
    })[]>;
    findActual(): Promise<{
        productos: ({
            producto: {
                id: number;
                nombre: string;
                descripcion: string | null;
                precio: import("@prisma/client-runtime-utils").Decimal;
                imagen: string | null;
                categoria: import("../../generated/prisma/enums").Categoria;
                createdAt: Date;
                updatedAt: Date;
            };
        } & {
            id: string;
            createdAt: Date;
            menuId: string;
            productoId: number;
            visible: boolean;
        })[];
    } & {
        id: string;
        nombre: string;
        createdAt: Date;
        updatedAt: Date;
        activo: boolean;
    }>;
    addProducto(menuId: string, dto: AddProductoToMenuDto): Promise<{
        producto: {
            id: number;
            nombre: string;
            descripcion: string | null;
            precio: import("@prisma/client-runtime-utils").Decimal;
            imagen: string | null;
            categoria: import("../../generated/prisma/enums").Categoria;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        id: string;
        createdAt: Date;
        menuId: string;
        productoId: number;
        visible: boolean;
    }>;
    toggleProducto(menuId: string, productoId: number): Promise<{
        producto: {
            id: number;
            nombre: string;
            descripcion: string | null;
            precio: import("@prisma/client-runtime-utils").Decimal;
            imagen: string | null;
            categoria: import("../../generated/prisma/enums").Categoria;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        id: string;
        createdAt: Date;
        menuId: string;
        productoId: number;
        visible: boolean;
    }>;
    toggleMenu(menuId: string): Promise<{
        id: string;
        nombre: string;
        createdAt: Date;
        updatedAt: Date;
        activo: boolean;
    }>;
}
