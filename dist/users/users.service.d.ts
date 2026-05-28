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
        id: number;
        name: string;
        email: string;
        role: string;
        balance: import("@prisma/client-runtime-utils").Decimal;
        first_login: boolean;
        is_active: boolean;
        created_at: Date;
        updated_at: Date;
    }[]>;
    togglePensioner(id: number): Promise<{
        id: number;
        name: string;
        email: string;
        role: string;
        balance: import("@prisma/client-runtime-utils").Decimal;
        first_login: boolean;
        is_active: boolean;
        created_at: Date;
        updated_at: Date;
    }>;
}
