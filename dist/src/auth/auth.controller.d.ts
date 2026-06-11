import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import type { Request, Response } from 'express';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(dto: LoginDto, res: Response): Promise<{
        first_login: boolean;
        role: string;
    }>;
    refresh(req: Request, res: Response): Promise<{
        message: string;
    }>;
    logout(res: Response): Promise<{
        message: string;
    }>;
    me(req: Request): Promise<{
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
