import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from '../auth/dto/create-user.dto';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    createPensioner(dto: CreateUserDto): Promise<{
        id: number;
        name: string;
        email: string;
        role: string;
    }>;
    findPensioners(): Promise<{
        email: string;
        id: number;
        name: string;
        role: string;
        balance: import("@prisma/client-runtime-utils").Decimal;
        first_login: boolean;
        is_active: boolean;
        created_at: Date;
        updated_at: Date;
    }[]>;
    togglePensioner(id: number): Promise<{
        email: string;
        id: number;
        name: string;
        role: string;
        balance: import("@prisma/client-runtime-utils").Decimal;
        first_login: boolean;
        is_active: boolean;
        created_at: Date;
        updated_at: Date;
    }>;
    rechargeBalance(id: number, amount: number): Promise<{
        email: string;
        id: number;
        name: string;
        role: string;
        balance: import("@prisma/client-runtime-utils").Decimal;
        first_login: boolean;
        is_active: boolean;
        created_at: Date;
        updated_at: Date;
    }>;
    consumeBalance(id: number, amount: number, description?: string): Promise<{
        consumed: number;
        description: string;
        email: string;
        id: number;
        name: string;
        role: string;
        balance: import("@prisma/client-runtime-utils").Decimal;
        first_login: boolean;
        is_active: boolean;
        created_at: Date;
        updated_at: Date;
    }>;
}
