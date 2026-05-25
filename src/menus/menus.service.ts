import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMenuDto } from './dto/create-menu.dto';

@Injectable()
export class MenusService {
  constructor(private readonly prisma: PrismaService) {}

  // ─── 1. Crear menú (desactiva el anterior automáticamente) ───

  async create(dto: CreateMenuDto) {
    // Desactivar todos los menús activos
    await this.prisma.menus.updateMany({
      where: { activo: true },
      data: { activo: false },
    });

    // Crear el nuevo menú como activo
    return this.prisma.menus.create({
      data: {
        nombre: dto.nombre,
        activo: true,
      },
    });
  }

  // ─── 2. Obtener todos los menús (historial) ─────────────────

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

  // ─── 3. Obtener menú activo (público) ───────────────────────

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
      throw new NotFoundException('No hay un menú activo actualmente');
    }

    return menu;
  }

  // ─── 4. Agregar producto a un menú ──────────────────────────

  async addProducto(menuId: string, productoId: number) {
    // Verificar que el menú existe
    const menu = await this.prisma.menus.findUnique({
      where: { id: menuId },
    });
    if (!menu) {
      throw new NotFoundException(`Menú con id "${menuId}" no encontrado`);
    }

    // Verificar que el producto existe
    const producto = await this.prisma.producto.findUnique({
      where: { id: productoId },
    });
    if (!producto) {
      throw new NotFoundException(
        `Producto con id ${productoId} no encontrado`,
      );
    }

    // Verificar que no esté duplicado
    const existing = await this.prisma.menusProductos.findUnique({
      where: { menuId_productoId: { menuId, productoId } },
    });
    if (existing) {
      throw new ConflictException(
        'El producto ya está agregado a este menú',
      );
    }

    return this.prisma.menusProductos.create({
      data: { menuId, productoId },
      include: { producto: true },
    });
  }

  // ─── 5. Toggle visibilidad de producto en menú ─────────────

  async toggleProductoVisibility(menuId: string, productoId: number) {
    const entry = await this.prisma.menusProductos.findUnique({
      where: { menuId_productoId: { menuId, productoId } },
    });

    if (!entry) {
      throw new NotFoundException(
        'El producto no está asociado a este menú',
      );
    }

    return this.prisma.menusProductos.update({
      where: { id: entry.id },
      data: { visible: !entry.visible },
      include: { producto: true },
    });
  }

  // ─── 6. Toggle activar/desactivar menú ─────────────────────

  async toggleMenu(menuId: string) {
    const menu = await this.prisma.menus.findUnique({
      where: { id: menuId },
    });

    if (!menu) {
      throw new NotFoundException(`Menú con id "${menuId}" no encontrado`);
    }

    if (!menu.activo) {
      // Activar este menú → desactivar todos los demás
      await this.prisma.menus.updateMany({
        where: { activo: true },
        data: { activo: false },
      });

      return this.prisma.menus.update({
        where: { id: menuId },
        data: { activo: true },
      });
    } else {
      // Desactivar el menú actual
      return this.prisma.menus.update({
        where: { id: menuId },
        data: { activo: false },
      });
    }
  }
}
