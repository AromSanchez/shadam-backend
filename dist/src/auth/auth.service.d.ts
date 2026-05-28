import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { LoginDto } from './dto/login.dto';
export declare class AuthService {
    private prisma;
    private jwt;
    constructor(prisma: PrismaService, jwt: JwtService);
    login(dto: LoginDto, res: any): Promise<{
        first_login: boolean;
        role: string;
    }>;
    refresh(req: any, res: any): Promise<{
        message: string;
    }>;
    logout(res: any): Promise<{
        message: string;
    }>;
}
