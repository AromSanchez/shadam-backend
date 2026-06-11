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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const prisma_service_1 = require("../prisma/prisma.service");
const bcrypt = __importStar(require("bcrypt"));
const crypto = __importStar(require("crypto"));
let AuthService = class AuthService {
    prisma;
    jwt;
    constructor(prisma, jwt) {
        this.prisma = prisma;
        this.jwt = jwt;
    }
    async login(dto, res) {
        const user = await this.prisma.user.findUnique({
            where: { email: dto.email },
        });
        if (!user || !user.is_active)
            throw new common_1.UnauthorizedException('Credenciales inválidas');
        const validPassword = await bcrypt.compare(dto.password, user.password);
        if (!validPassword)
            throw new common_1.UnauthorizedException('Credenciales inválidas');
        const payload = { sub: user.id, role: user.role };
        const accessToken = this.jwt.sign(payload, { expiresIn: '15m' });
        const refreshToken = this.jwt.sign(payload, { expiresIn: '7d' });
        res.cookie('access_token', accessToken, {
            httpOnly: true,
            sameSite: 'strict',
            maxAge: 15 * 60 * 1000,
        });
        res.cookie('refresh_token', refreshToken, {
            httpOnly: true,
            sameSite: 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });
        return {
            first_login: user.first_login,
            role: user.role,
        };
    }
    async refresh(req, res) {
        const token = req.cookies?.refresh_token;
        if (!token)
            throw new common_1.UnauthorizedException('No refresh token');
        try {
            const payload = this.jwt.verify(token);
            const user = await this.prisma.user.findUnique({
                where: { id: payload.sub },
            });
            if (!user || !user.is_active)
                throw new common_1.UnauthorizedException('Usuario inválido');
            const newAccessToken = this.jwt.sign({ sub: user.id, role: user.role }, { expiresIn: '15m' });
            res.cookie('access_token', newAccessToken, {
                httpOnly: true,
                sameSite: 'strict',
                maxAge: 15 * 60 * 1000,
            });
            return { message: 'Token renovado' };
        }
        catch {
            throw new common_1.UnauthorizedException('Refresh token inválido o expirado');
        }
    }
    async logout(res) {
        res.clearCookie('access_token');
        res.clearCookie('refresh_token');
        return { message: 'Sesión cerrada' };
    }
    async me(req) {
        const payload = req.user;
        const user = await this.prisma.user.findUnique({
            where: { id: payload.sub },
            select: {
                id: true,
                name: true,
                email: true,
                role: true,
                pensioner_type: true,
                qr_token: true,
                balance: true,
                first_login: true,
                is_active: true,
            },
        });
        if (!user)
            throw new common_1.UnauthorizedException('Usuario no encontrado');
        let currentUser = user;
        if (user.role === 'pensioner' && !user.qr_token) {
            let qrToken = `PEN-${crypto.randomBytes(6).toString('hex').toUpperCase()}`;
            let tokenExists = await this.prisma.user.findUnique({ where: { qr_token: qrToken } });
            while (tokenExists) {
                qrToken = `PEN-${crypto.randomBytes(6).toString('hex').toUpperCase()}`;
                tokenExists = await this.prisma.user.findUnique({ where: { qr_token: qrToken } });
            }
            currentUser = await this.prisma.user.update({
                where: { id: user.id },
                data: { qr_token: qrToken },
                select: {
                    id: true,
                    name: true,
                    email: true,
                    role: true,
                    pensioner_type: true,
                    qr_token: true,
                    balance: true,
                    first_login: true,
                    is_active: true,
                },
            });
        }
        if (currentUser.role === 'pensioner') {
            const todayStart = new Date();
            todayStart.setHours(0, 0, 0, 0);
            const todayEnd = new Date();
            todayEnd.setHours(23, 59, 59, 999);
            const todayConsumptions = await this.prisma.consumption.findMany({
                where: {
                    userId: currentUser.id,
                    date: { gte: todayStart, lte: todayEnd },
                },
                orderBy: { date: 'asc' },
            });
            return {
                ...currentUser,
                todayConsumptions: todayConsumptions.map(c => ({
                    mealType: c.mealType,
                    amount: c.amount,
                    date: c.date,
                })),
            };
        }
        return currentUser;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map