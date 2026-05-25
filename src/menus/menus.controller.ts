import {
  Controller,
  Get,
  Post,
  Patch,
  Param,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { MenusService } from './menus.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { AddProductoToMenuDto } from './dto/add-producto-to-menu.dto';

@Controller('menus')
export class MenusController {
  constructor(private readonly menusService: MenusService) {}

  // POST /menus → crear menú
  @Post()
  create(@Body() dto: CreateMenuDto) {
    return this.menusService.create(dto);
  }

  // GET /menus → historial de menús
  @Get()
  findAll() {
    return this.menusService.findAll();
  }

  // GET /menus/actual → menú activo con productos visibles
  @Get('actual')
  findActual() {
    return this.menusService.findActual();
  }

  // POST /menus/:menuId/productos → agregar producto al menú
  @Post(':menuId/productos')
  addProducto(
    @Param('menuId') menuId: string,
    @Body() dto: AddProductoToMenuDto,
  ) {
    return this.menusService.addProducto(menuId, dto.productoId);
  }

  // PATCH /menus/:menuId/productos/:productoId/toggle → toggle visibilidad
  @Patch(':menuId/productos/:productoId/toggle')
  toggleProducto(
    @Param('menuId') menuId: string,
    @Param('productoId', ParseIntPipe) productoId: number,
  ) {
    return this.menusService.toggleProductoVisibility(menuId, productoId);
  }

  // PATCH /menus/:menuId/toggle → activar/desactivar menú
  @Patch(':menuId/toggle')
  toggleMenu(@Param('menuId') menuId: string) {
    return this.menusService.toggleMenu(menuId);
  }
}
