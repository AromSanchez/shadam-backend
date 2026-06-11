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
exports.ConsumptionsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const client_1 = require("../../generated/prisma/client");
const prismaNamespace_1 = require("../../generated/prisma/internal/prismaNamespace");
const STUDENT_CHARGE_PER_3 = 16.66;
let ConsumptionsService = class ConsumptionsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async register(userId, mealType) {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
            select: {
                id: true,
                role: true,
                is_active: true,
                pensioner_type: true,
                balance: true,
                name: true,
            },
        });
        if (!user)
            throw new common_1.NotFoundException('Pensionista no encontrado');
        if (user.role !== 'pensioner')
            throw new common_1.BadRequestException('El usuario no es pensionista');
        if (!user.is_active)
            throw new common_1.BadRequestException('El pensionista no está activo');
        if (!user.pensioner_type)
            throw new common_1.BadRequestException('El pensionista no tiene tipo asignado');
        const todayStart = new Date();
        todayStart.setHours(0, 0, 0, 0);
        const todayEnd = new Date();
        todayEnd.setHours(23, 59, 59, 999);
        const existingToday = await this.prisma.consumption.findFirst({
            where: {
                userId,
                mealType,
                date: { gte: todayStart, lte: todayEnd },
            },
        });
        if (existingToday) {
            throw new common_1.BadRequestException(`El pensionista ya consumió ${mealType.toLowerCase()} hoy`);
        }
        let amountCharged = new prismaNamespace_1.Decimal(0);
        if (user.pensioner_type === client_1.PensionerType.TRABAJADOR) {
            const priceConfig = await this.prisma.priceConfig.findUnique({
                where: { mealType },
            });
            if (!priceConfig) {
                throw new common_1.BadRequestException(`No hay precio configurado para ${mealType.toLowerCase()}`);
            }
            amountCharged = new prismaNamespace_1.Decimal(priceConfig.price);
            if (new prismaNamespace_1.Decimal(user.balance).lessThan(amountCharged)) {
                throw new common_1.BadRequestException(`Saldo insuficiente. Saldo: S/ ${new prismaNamespace_1.Decimal(user.balance).toFixed(2)}, Costo: S/ ${amountCharged.toFixed(2)}`);
            }
            const newBalance = new prismaNamespace_1.Decimal(user.balance).minus(amountCharged);
            await this.prisma.user.update({
                where: { id: userId },
                data: { balance: newBalance },
            });
            await this.prisma.balanceMovement.create({
                data: {
                    userId,
                    type: 'CONSUMO',
                    amount: -Number(amountCharged),
                    balance: newBalance,
                    description: `Consumo ${mealType.toLowerCase()} -S/ ${amountCharged.toFixed(2)}`,
                },
            });
        }
        else {
            const totalConsumptions = await this.prisma.consumption.count({
                where: { userId },
            });
            const afterThis = totalConsumptions + 1;
            if (afterThis % 3 === 0) {
                amountCharged = new prismaNamespace_1.Decimal(STUDENT_CHARGE_PER_3);
                if (new prismaNamespace_1.Decimal(user.balance).lessThan(amountCharged)) {
                    throw new common_1.BadRequestException(`Saldo insuficiente. Con este consumo se completan 3 y se cobra S/ ${STUDENT_CHARGE_PER_3}. Saldo actual: S/ ${new prismaNamespace_1.Decimal(user.balance).toFixed(2)}`);
                }
                const newBalance = new prismaNamespace_1.Decimal(user.balance).minus(amountCharged);
                await this.prisma.user.update({
                    where: { id: userId },
                    data: { balance: newBalance },
                });
                await this.prisma.balanceMovement.create({
                    data: {
                        userId,
                        type: 'CONSUMO',
                        amount: -Number(amountCharged),
                        balance: newBalance,
                        description: `Cobro por 3 consumos (estudiante) -S/ ${amountCharged.toFixed(2)}`,
                    },
                });
            }
        }
        const consumption = await this.prisma.consumption.create({
            data: {
                userId,
                mealType,
                amount: amountCharged,
                date: new Date(),
            },
            include: {
                user: {
                    select: {
                        id: true,
                        name: true,
                        balance: true,
                        pensioner_type: true,
                    },
                },
            },
        });
        return {
            ...consumption,
            message: amountCharged.greaterThan(0)
                ? `Consumo registrado. Se descontó S/ ${amountCharged.toFixed(2)}`
                : 'Consumo registrado. Sin descuento aún.',
        };
    }
    async findByUser(userId) {
        return this.prisma.consumption.findMany({
            where: { userId },
            orderBy: { date: 'desc' },
            take: 100,
        });
    }
    async findTodayByUser(userId) {
        const todayStart = new Date();
        todayStart.setHours(0, 0, 0, 0);
        const todayEnd = new Date();
        todayEnd.setHours(23, 59, 59, 999);
        return this.prisma.consumption.findMany({
            where: {
                userId,
                date: { gte: todayStart, lte: todayEnd },
            },
            orderBy: { date: 'asc' },
        });
    }
    async validateByQrToken(qrToken) {
        const user = await this.prisma.user.findUnique({
            where: { qr_token: qrToken },
            select: {
                id: true,
                name: true,
                email: true,
                role: true,
                pensioner_type: true,
                balance: true,
                is_active: true,
                qr_token: true,
            },
        });
        if (!user)
            throw new common_1.NotFoundException('Código QR inválido');
        if (user.role !== 'pensioner')
            throw new common_1.BadRequestException('El código no corresponde a un pensionista');
        if (!user.is_active)
            throw new common_1.BadRequestException('El pensionista no está activo');
        const todayStart = new Date();
        todayStart.setHours(0, 0, 0, 0);
        const todayEnd = new Date();
        todayEnd.setHours(23, 59, 59, 999);
        const todayConsumptions = await this.prisma.consumption.findMany({
            where: {
                userId: user.id,
                date: { gte: todayStart, lte: todayEnd },
            },
        });
        return {
            ...user,
            todayConsumptions: todayConsumptions.map(c => c.mealType),
        };
    }
    async getStats(userId) {
        const consumptions = await this.prisma.consumption.findMany({
            where: { userId },
            orderBy: { date: 'desc' },
            take: 90,
        });
        const grouped = {};
        for (const c of consumptions) {
            const dateKey = c.date.toISOString().split('T')[0];
            if (!grouped[dateKey]) {
                grouped[dateKey] = { meals: [], totalCharged: 0 };
            }
            grouped[dateKey].meals.push(c.mealType);
            grouped[dateKey].totalCharged += Number(c.amount);
        }
        const totalConsumed = consumptions.length;
        const totalCharged = consumptions.reduce((sum, c) => sum + Number(c.amount), 0);
        return {
            totalConsumed,
            totalCharged,
            history: grouped,
        };
    }
};
exports.ConsumptionsService = ConsumptionsService;
exports.ConsumptionsService = ConsumptionsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ConsumptionsService);
//# sourceMappingURL=consumptions.service.js.map