import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private prisma: PrismaService,
        private jwt: JwtService,
    ) { }

    async login(dto: LoginDto, res: any) {
        const user = await this.prisma.user.findUnique({
            where: { email: dto.email },
        });

        if (!user || !user.is_active) throw new UnauthorizedException('Credenciales inválidas');

        const validPassword = await bcrypt.compare(dto.password, user.password);
        if (!validPassword) throw new UnauthorizedException('Credenciales inválidas');

        const payload = { sub: user.id, role: user.role };

        const accessToken = this.jwt.sign(payload, { expiresIn: '15m' });
        const refreshToken = this.jwt.sign(payload, { expiresIn: '7d' });

        res.cookie('access_token', accessToken, {
            httpOnly: true,
            sameSite: 'strict',
            maxAge: 15 * 60 * 1000, // 15 min
        });

        res.cookie('refresh_token', refreshToken, {
            httpOnly: true,
            sameSite: 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 días
        });

        return {
            first_login: user.first_login,
            role: user.role,
        };
    }

    async refresh(req: any, res: any) {
        const token = req.cookies?.refresh_token;

        if (!token) throw new UnauthorizedException('No refresh token');

        try {
            const payload = this.jwt.verify(token) as { sub: number; role: string };

            const user = await this.prisma.user.findUnique({
                where: { id: payload.sub },
            });

            if (!user || !user.is_active) throw new UnauthorizedException('Usuario inválido');

            const newAccessToken = this.jwt.sign(
                { sub: user.id, role: user.role },
                { expiresIn: '15m' },
            );

            res.cookie('access_token', newAccessToken, {
                httpOnly: true,
                sameSite: 'strict',
                maxAge: 15 * 60 * 1000,
            });

            return { message: 'Token renovado' };
        } catch {
            throw new UnauthorizedException('Refresh token inválido o expirado');
        }
    }

    async logout(res: any) {
        res.clearCookie('access_token');
        res.clearCookie('refresh_token');
        return { message: 'Sesión cerrada' };
    }

    async me(req: any) {
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

        if (!user) throw new UnauthorizedException('Usuario no encontrado');

        // If pensioner has no qr_token, generate one
        let currentUser = user;
        if (user.role === 'pensioner' && !user.qr_token) {
            // Find next available PEN-XXX number
            const count = await this.prisma.user.count({
                where: { qr_token: { startsWith: 'PEN-' } },
            });
            let nextNum = count + 1;
            let qrToken = `PEN-${String(nextNum).padStart(3, '0')}`;
            let tokenExists = await this.prisma.user.findUnique({ where: { qr_token: qrToken } });
            while (tokenExists) {
                nextNum++;
                qrToken = `PEN-${String(nextNum).padStart(3, '0')}`;
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

        // If pensioner, also return today's consumptions
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
}