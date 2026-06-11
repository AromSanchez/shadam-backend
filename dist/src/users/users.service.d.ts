import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from '../auth/dto/create-user.dto';
import { PensionerType } from '../../generated/prisma/client';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    private generateQrToken;
    createPensioner(dto: CreateUserDto): Promise<{
        id: number;
        name: string;
        email: string;
        role: string;
        pensioner_type: PensionerType | null;
        qr_token: string | null;
        balance: import("@prisma/client-runtime-utils").Decimal;
        first_login: boolean;
        is_active: boolean;
        created_at: Date;
        updated_at: Date;
    }>;
    findPensioners(): Promise<{
        id: number;
        name: string;
        email: string;
        role: string;
        pensioner_type: PensionerType | null;
        qr_token: string | null;
        balance: import("@prisma/client-runtime-utils").Decimal;
        first_login: boolean;
        is_active: boolean;
        created_at: Date;
        updated_at: Date;
    }[]>;
    findPensionerById(id: number): Promise<{
        id: number;
        name: string;
        email: string;
        role: string;
        pensioner_type: PensionerType | null;
        qr_token: string | null;
        balance: import("@prisma/client-runtime-utils").Decimal;
        first_login: boolean;
        is_active: boolean;
        created_at: Date;
        updated_at: Date;
    }>;
    togglePensioner(id: number): Promise<{
        id: number;
        name: string;
        email: string;
        role: string;
        pensioner_type: PensionerType | null;
        qr_token: string | null;
        balance: import("@prisma/client-runtime-utils").Decimal;
        first_login: boolean;
        is_active: boolean;
        created_at: Date;
        updated_at: Date;
    }>;
    rechargeBalance(id: number, amount: number): Promise<{
        id: number;
        name: string;
        email: string;
        role: string;
        pensioner_type: PensionerType | null;
        qr_token: string | null;
        balance: import("@prisma/client-runtime-utils").Decimal;
        first_login: boolean;
        is_active: boolean;
        created_at: Date;
        updated_at: Date;
    }>;
    consumeBalance(id: number, amount: number, description?: string): Promise<{
        consumed: number;
        description: string;
        id: number;
        name: string;
        email: string;
        role: string;
        pensioner_type: PensionerType | null;
        qr_token: string | null;
        balance: import("@prisma/client-runtime-utils").Decimal;
        first_login: boolean;
        is_active: boolean;
        created_at: Date;
        updated_at: Date;
    }>;
    updateProfile(id: number, data: {
        email?: string;
        password?: string;
    }): Promise<{
        id: number;
        name: string;
        email: string;
        role: string;
        pensioner_type: PensionerType | null;
        qr_token: string | null;
        balance: import("@prisma/client-runtime-utils").Decimal;
        first_login: boolean;
        is_active: boolean;
        created_at: Date;
        updated_at: Date;
    }>;
    skipOnboarding(id: number): Promise<{
        id: number;
        name: string;
        email: string;
        role: string;
        pensioner_type: PensionerType | null;
        qr_token: string | null;
        balance: import("@prisma/client-runtime-utils").Decimal;
        first_login: boolean;
        is_active: boolean;
        created_at: Date;
        updated_at: Date;
    }>;
}
