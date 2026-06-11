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
exports.ConsumptionsController = void 0;
const common_1 = require("@nestjs/common");
const consumptions_service_1 = require("./consumptions.service");
const register_consumption_dto_1 = require("./dto/register-consumption.dto");
const jwt_guard_1 = require("../auth/guards/jwt.guard");
const roles_guard_1 = require("../auth/guards/roles.guard");
const roles_decorator_1 = require("../auth/decorators/roles.decorator");
let ConsumptionsController = class ConsumptionsController {
    consumptionsService;
    constructor(consumptionsService) {
        this.consumptionsService = consumptionsService;
    }
    register(dto) {
        return this.consumptionsService.register(dto.userId, dto.mealType);
    }
    validateQr(body) {
        return this.consumptionsService.validateByQrToken(body.qrToken);
    }
    findByUser(userId) {
        return this.consumptionsService.findByUser(userId);
    }
    findTodayByUser(userId) {
        return this.consumptionsService.findTodayByUser(userId);
    }
    getStats(userId) {
        return this.consumptionsService.getStats(userId);
    }
    findMyHistory(req) {
        return this.consumptionsService.findByUser(req.user.sub);
    }
    findMyToday(req) {
        return this.consumptionsService.findTodayByUser(req.user.sub);
    }
    getMyStats(req) {
        return this.consumptionsService.getStats(req.user.sub);
    }
};
exports.ConsumptionsController = ConsumptionsController;
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)('admin'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [register_consumption_dto_1.RegisterConsumptionDto]),
    __metadata("design:returntype", void 0)
], ConsumptionsController.prototype, "register", null);
__decorate([
    (0, common_1.Post)('validate-qr'),
    (0, roles_decorator_1.Roles)('admin'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ConsumptionsController.prototype, "validateQr", null);
__decorate([
    (0, common_1.Get)('user/:userId'),
    (0, roles_decorator_1.Roles)('admin'),
    __param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ConsumptionsController.prototype, "findByUser", null);
__decorate([
    (0, common_1.Get)('user/:userId/today'),
    (0, roles_decorator_1.Roles)('admin'),
    __param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ConsumptionsController.prototype, "findTodayByUser", null);
__decorate([
    (0, common_1.Get)('user/:userId/stats'),
    (0, roles_decorator_1.Roles)('admin'),
    __param(0, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ConsumptionsController.prototype, "getStats", null);
__decorate([
    (0, common_1.Get)('me/history'),
    (0, roles_decorator_1.Roles)('pensioner'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ConsumptionsController.prototype, "findMyHistory", null);
__decorate([
    (0, common_1.Get)('me/today'),
    (0, roles_decorator_1.Roles)('pensioner'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ConsumptionsController.prototype, "findMyToday", null);
__decorate([
    (0, common_1.Get)('me/stats'),
    (0, roles_decorator_1.Roles)('pensioner'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ConsumptionsController.prototype, "getMyStats", null);
exports.ConsumptionsController = ConsumptionsController = __decorate([
    (0, common_1.Controller)('consumptions'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard, roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [consumptions_service_1.ConsumptionsService])
], ConsumptionsController);
//# sourceMappingURL=consumptions.controller.js.map