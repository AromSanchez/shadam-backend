"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const bcrypt = __importStar(require("bcrypt"));
const crypto = __importStar(require("crypto"));
const prismaNamespace_1 = require("../../generated/prisma/internal/prismaNamespace");
const client_1 = require("../../generated/prisma/client");
const pensionerSelect = {
    id: true,
    name: true,
    email: true,
    role: true,
    pensioner_type: true,
    qr_token: true,
    balance: true,
    first_login: true,
    is_active: true,
    created_at: true,
    updated_at: true,
};
let UsersService = class UsersService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    generateQrToken() {
        return `PEN-${crypto.randomBytes(6).toString('hex').toUpperCase()}`;
    }
    async createPensioner(dto) {
        const existing = await this.prisma.user.findUnique({
            where: { email: dto.dni },
        });
        if (existing)
            throw new common_1.ConflictException('Ya existe un usuario con ese DNI');
        const hashed = await bcrypt.hash(dto.dni, 10);
        let qrToken = this.generateQrToken();
        let tokenExists = await this.prisma.user.findUnique({ where: { qr_token: qrToken } });
        while (tokenExists) {
            qrToken = this.generateQrToken();
            tokenExists = await this.prisma.user.findUnique({ where: { qr_token: qrToken } });
        }
        const user = await this.prisma.user.create({
            data: {
                name: dto.name,
                email: dto.dni,
                password: hashed,
                role: 'pensioner',
                pensioner_type: dto.pensioner_type || client_1.PensionerType.ESTUDIANTE,
                qr_token: qrToken,
                first_login: true,
                is_active: true,
                balance: 0,
            },
            select: pensionerSelect,
        });
        return user;
    }
    async findPensioners() {
        return this.prisma.user.findMany({
            where: { role: 'pensioner' },
            select: pensionerSelect,
            orderBy: { created_at: 'desc' },
        });
    }
    async findPensionerById(id) {
        const user = await this.prisma.user.findUnique({
            where: { id },
            select: pensionerSelect,
        });
        if (!user)
            throw new common_1.NotFoundException('Pensionista no encontrado');
        if (user.role !== 'pensioner')
            throw new common_1.BadRequestException('El usuario no es pensionista');
        return user;
    }
    async togglePensioner(id) {
        const user = await this.prisma.user.findUnique({
            where: { id },
            select: {
                id: true,
                role: true,
                is_active: true,
            },
        });
        if (!user)
            throw new common_1.NotFoundException('Usuario no encontrado');
        if (user.role !== 'pensioner') {
            throw new common_1.BadRequestException('Solo se pueden activar o desactivar usuarios pensionistas');
        }
        return this.prisma.user.update({
            where: { id },
            data: { is_active: !user.is_active },
            select: pensionerSelect,
        });
    }
    async rechargeBalance(id, amount) {
        if (!amount || amount <= 0) {
            throw new common_1.BadRequestException('El monto debe ser mayor a 0');
        }
        const user = await this.prisma.user.findUnique({
            where: { id },
            select: { id: true, role: true, balance: true },
        });
        if (!user)
            throw new common_1.NotFoundException('Usuario no encontrado');
        if (user.role !== 'pensioner') {
            throw new common_1.BadRequestException('Solo se puede recargar saldo a pensionistas');
        }
        const newBalance = new prismaNamespace_1.Decimal(user.balance).plus(new prismaNamespace_1.Decimal(amount));
        return this.prisma.user.update({
            where: { id },
            data: { balance: newBalance },
            select: pensionerSelect,
        });
    }
    async consumeBalance(id, amount, description) {
        if (!amount || amount <= 0) {
            throw new common_1.BadRequestException('El monto debe ser mayor a 0');
        }
        const user = await this.prisma.user.findUnique({
            where: { id },
            select: { id: true, role: true, balance: true, name: true },
        });
        if (!user)
            throw new common_1.NotFoundException('Usuario no encontrado');
        if (user.role !== 'pensioner') {
            throw new common_1.BadRequestException('Solo se puede consumir saldo de pensionistas');
        }
        const currentBalance = new prismaNamespace_1.Decimal(user.balance);
        if (currentBalance.lessThan(new prismaNamespace_1.Decimal(amount))) {
            throw new common_1.BadRequestException(`Saldo insuficiente. Saldo actual: S/ ${currentBalance.toFixed(2)}, monto requerido: S/ ${amount.toFixed(2)}`);
        }
        const newBalance = currentBalance.minus(new prismaNamespace_1.Decimal(amount));
        const updated = await this.prisma.user.update({
            where: { id },
            data: { balance: newBalance },
            select: pensionerSelect,
        });
        return {
            ...updated,
            consumed: amount,
            description: description || 'Consumo de pedido',
        };
    }
    async updateProfile(id, data) {
        const user = await this.prisma.user.findUnique({ where: { id } });
        if (!user)
            throw new common_1.NotFoundException('Usuario no encontrado');
        const updateData = {};
        if (data.email) {
            const existing = await this.prisma.user.findUnique({ where: { email: data.email } });
            if (existing && existing.id !== id) {
                throw new common_1.ConflictException('Ya existe un usuario con ese correo');
            }
            updateData.email = data.email;
        }
        if (data.password) {
            updateData.password = await bcrypt.hash(data.password, 10);
        }
        updateData.first_login = false;
        return this.prisma.user.update({
            where: { id },
            data: updateData,
            select: pensionerSelect,
        });
    }
    async skipOnboarding(id) {
        return this.prisma.user.update({
            where: { id },
            data: { first_login: false },
            select: pensionerSelect,
        });
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsersService);
//# sourceMappingURL=users.service.js.map