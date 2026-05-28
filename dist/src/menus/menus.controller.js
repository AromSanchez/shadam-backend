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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenusController = void 0;
const common_1 = require("@nestjs/common");
const menus_service_1 = require("./menus.service");
const create_menu_dto_1 = require("./dto/create-menu.dto");
const add_producto_to_menu_dto_1 = require("./dto/add-producto-to-menu.dto");
let MenusController = class MenusController {
    menusService;
    constructor(menusService) {
        this.menusService = menusService;
    }
    create(dto) {
        return this.menusService.create(dto);
    }
    findAll() {
        return this.menusService.findAll();
    }
    findActual() {
        return this.menusService.findActual();
    }
    addProducto(menuId, dto) {
        return this.menusService.addProducto(menuId, dto.productoId);
    }
    toggleProducto(menuId, productoId) {
        return this.menusService.toggleProductoVisibility(menuId, productoId);
    }
    toggleMenu(menuId) {
        return this.menusService.toggleMenu(menuId);
    }
};
exports.MenusController = MenusController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_menu_dto_1.CreateMenuDto]),
    __metadata("design:returntype", void 0)
], MenusController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MenusController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('actual'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MenusController.prototype, "findActual", null);
__decorate([
    (0, common_1.Post)(':menuId/productos'),
    __param(0, (0, common_1.Param)('menuId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, add_producto_to_menu_dto_1.AddProductoToMenuDto]),
    __metadata("design:returntype", void 0)
], MenusController.prototype, "addProducto", null);
__decorate([
    (0, common_1.Patch)(':menuId/productos/:productoId/toggle'),
    __param(0, (0, common_1.Param)('menuId')),
    __param(1, (0, common_1.Param)('productoId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", void 0)
], MenusController.prototype, "toggleProducto", null);
__decorate([
    (0, common_1.Patch)(':menuId/toggle'),
    __param(0, (0, common_1.Param)('menuId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MenusController.prototype, "toggleMenu", null);
exports.MenusController = MenusController = __decorate([
    (0, common_1.Controller)('menus'),
    __metadata("design:paramtypes", [menus_service_1.MenusService])
], MenusController);
//# sourceMappingURL=menus.controller.js.map