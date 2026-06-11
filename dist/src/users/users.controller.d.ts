import { UsersService } from './users.service';
import { CreateUserDto } from '../auth/dto/create-user.dto';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    createPensioner(dto: CreateUserDto): Promise<{
        id: number;
        name: string;
        email: string;
        role: string;
        pensioner_type: import("../../generated/prisma/enums").PensionerType | null;
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
        pensioner_type: import("../../generated/prisma/enums").PensionerType | null;
        qr_token: string | null;
        balance: import("@prisma/client-runtime-utils").Decimal;
        first_login: boolean;
        is_active: boolean;
        created_at: Date;
        updated_at: Date;
    }[]>;
    findPensioner(id: number): Promise<{
        id: number;
        name: string;
        email: string;
        role: string;
        pensioner_type: import("../../generated/prisma/enums").PensionerType | null;
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
        pensioner_type: import("../../generated/prisma/enums").PensionerType | null;
        qr_token: string | null;
        balance: import("@prisma/client-runtime-utils").Decimal;
        first_login: boolean;
        is_active: boolean;
        created_at: Date;
        updated_at: Date;
    }>;
    rechargeBalance(id: number, body: {
        amount: number;
    }): Promise<{
        id: number;
        name: string;
        email: string;
        role: string;
        pensioner_type: import("../../generated/prisma/enums").PensionerType | null;
        qr_token: string | null;
        balance: import("@prisma/client-runtime-utils").Decimal;
        first_login: boolean;
        is_active: boolean;
        created_at: Date;
        updated_at: Date;
    }>;
    consumeBalance(id: number, body: {
        amount: number;
        description?: string;
    }): Promise<{
        consumed: number;
        description: string;
        id: number;
        name: string;
        email: string;
        role: string;
        pensioner_type: import("../../generated/prisma/enums").PensionerType | null;
        qr_token: string | null;
        balance: import("@prisma/client-runtime-utils").Decimal;
        first_login: boolean;
        is_active: boolean;
        created_at: Date;
        updated_at: Date;
    }>;
    updateMyProfile(req: any, body: {
        email?: string;
        password?: string;
    }): Promise<{
        id: number;
        name: string;
        email: string;
        role: string;
        pensioner_type: import("../../generated/prisma/enums").PensionerType | null;
        qr_token: string | null;
        balance: import("@prisma/client-runtime-utils").Decimal;
        first_login: boolean;
        is_active: boolean;
        created_at: Date;
        updated_at: Date;
    }>;
    skipOnboarding(req: any): Promise<{
        id: number;
        name: string;
        email: string;
        role: string;
        pensioner_type: import("../../generated/prisma/enums").PensionerType | null;
        qr_token: string | null;
        balance: import("@prisma/client-runtime-utils").Decimal;
        first_login: boolean;
        is_active: boolean;
        created_at: Date;
        updated_at: Date;
    }>;
    getMovements(id: number, limit?: string): Promise<{
        user: {
            id: number;
            name: string;
            balance: import("@prisma/client-runtime-utils").Decimal;
        };
        movements: {
            id: string;
            balance: import("@prisma/client-runtime-utils").Decimal;
            createdAt: Date;
            type: import("../../generated/prisma/enums").MovementType;
            amount: import("@prisma/client-runtime-utils").Decimal;
            userId: number;
            description: string | null;
        }[];
    }>;
    getMyMovements(req: any, limit?: string): Promise<{
        user: {
            id: number;
            name: string;
            balance: import("@prisma/client-runtime-utils").Decimal;
        };
        movements: {
            id: string;
            balance: import("@prisma/client-runtime-utils").Decimal;
            createdAt: Date;
            type: import("../../generated/prisma/enums").MovementType;
            amount: import("@prisma/client-runtime-utils").Decimal;
            userId: number;
            description: string | null;
        }[];
    }>;
}
