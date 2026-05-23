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
  ) {}

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

  async logout(res: any) {
    res.clearCookie('access_token');
    res.clearCookie('refresh_token');
    return { message: 'Sesión cerrada' };
  }
}