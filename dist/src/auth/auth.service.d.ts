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
    me(req: any): Promise<{
        id: number;
        name: string;
        email: string;
        role: string;
        pensioner_type: import("../../generated/prisma/enums").PensionerType | null;
        qr_token: string | null;
        balance: import("@prisma/client-runtime-utils").Decimal;
        first_login: boolean;
        is_active: boolean;
    } | {
        todayConsumptions: {
            mealType: import("../../generated/prisma/enums").MealType;
            amount: import("@prisma/client-runtime-utils").Decimal;
            date: Date;
        }[];
        id: number;
        name: string;
        email: string;
        role: string;
        pensioner_type: import("../../generated/prisma/enums").PensionerType | null;
        qr_token: string | null;
        balance: import("@prisma/client-runtime-utils").Decimal;
        first_login: boolean;
        is_active: boolean;
    }>;
}
