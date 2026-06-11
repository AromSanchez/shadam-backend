import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class ProductosService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateProductoDto, imagenUrl?: string) {
    return this.prisma.producto.create({
      data: {
        nombre: dto.nombre,
        descripcion: dto.descripcion,
        precio: dto.precio,
        imagen: imagenUrl,
        categoria: dto.categoria,
      },
    });
  }

  findAll() {
    return this.prisma.producto.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  findOne(id: number) {
    return this.prisma.producto.findUnique({ where: { id } });
  }

  async update(id: number, dto: UpdateProductoDto, imagenUrl?: string) {
    const producto = await this.prisma.producto.findUnique({ where: { id } });
    if (!producto) {
      throw new NotFoundException(`Producto con id ${id} no encontrado`);
    }

    const data: Record<string, any> = {};
    if (dto.nombre !== undefined) data.nombre = dto.nombre;
    if (dto.descripcion !== undefined) data.descripcion = dto.descripcion;
    if (dto.precio !== undefined) data.precio = dto.precio;
    if (dto.categoria !== undefined) data.categoria = dto.categoria;
    if (imagenUrl !== undefined) {
      // Delete old image file if it exists
      if (producto.imagen) {
        const oldPath = path.join(process.cwd(), producto.imagen);
        if (fs.existsSync(oldPath)) {
          fs.unlinkSync(oldPath);
        }
      }
      data.imagen = imagenUrl;
    }

    return this.prisma.producto.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    const producto = await this.prisma.producto.findUnique({ where: { id } });
    if (!producto) {
      throw new NotFoundException(`Producto con id ${id} no encontrado`);
    }

    // Delete the product - cascades handle MenusProductos and OrderItems,
    // SaleItems get productoId set to null (they keep productName snapshot)
    await this.prisma.producto.delete({ where: { id } });

    // Delete the image file if it exists
    if (producto.imagen) {
      const imagePath = path.join(process.cwd(), producto.imagen);
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }

    return { message: 'Producto eliminado' };
  }
}
