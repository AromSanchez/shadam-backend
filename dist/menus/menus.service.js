"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenusService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let MenusService = class MenusService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto) {
        await this.prisma.menus.updateMany({
            where: { activo: true },
            data: { activo: false },
        });
        return this.prisma.menus.create({
            data: {
                nombre: dto.nombre,
                activo: true,
            },
        });
    }
    findAll() {
        return this.prisma.menus.findMany({
            orderBy: { createdAt: 'desc' },
            include: {
                productos: {
                    include: { producto: true },
                },
            },
        });
    }
    async findActual() {
        const menu = await this.prisma.menus.findFirst({
            where: { activo: true },
            include: {
                productos: {
                    where: { visible: true },
                    include: { producto: true },
                },
            },
        });
        if (!menu) {
            throw new common_1.NotFoundException('No hay un menú activo actualmente');
        }
        return menu;
    }
    async addProducto(menuId, productoId) {
        const menu = await this.prisma.menus.findUnique({
            where: { id: menuId },
        });
        if (!menu) {
            throw new common_1.NotFoundException(`Menú con id "${menuId}" no encontrado`);
        }
        const producto = await this.prisma.producto.findUnique({
            where: { id: productoId },
        });
        if (!producto) {
            throw new common_1.NotFoundException(`Producto con id ${productoId} no encontrado`);
        }
        const existing = await this.prisma.menusProductos.findUnique({
            where: { menuId_productoId: { menuId, productoId } },
        });
        if (existing) {
            throw new common_1.ConflictException('El producto ya está agregado a este menú');
        }
        return this.prisma.menusProductos.create({
            data: { menuId, productoId },
            include: { producto: true },
        });
    }
    async toggleProductoVisibility(menuId, productoId) {
        const entry = await this.prisma.menusProductos.findUnique({
            where: { menuId_productoId: { menuId, productoId } },
        });
        if (!entry) {
            throw new common_1.NotFoundException('El producto no está asociado a este menú');
        }
        return this.prisma.menusProductos.update({
            where: { id: entry.id },
            data: { visible: !entry.visible },
            include: { producto: true },
        });
    }
    async toggleMenu(menuId) {
        const menu = await this.prisma.menus.findUnique({
            where: { id: menuId },
        });
        if (!menu) {
            throw new common_1.NotFoundException(`Menú con id "${menuId}" no encontrado`);
        }
        if (!menu.activo) {
            await this.prisma.menus.updateMany({
                where: { activo: true },
                data: { activo: false },
            });
            return this.prisma.menus.update({
                where: { id: menuId },
                data: { activo: true },
            });
        }
        else {
            return this.prisma.menus.update({
                where: { id: menuId },
                data: { activo: false },
            });
        }
    }
};
exports.MenusService = MenusService;
exports.MenusService = MenusService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], MenusService);
//# sourceMappingURL=menus.service.js.map