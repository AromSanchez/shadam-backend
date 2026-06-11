import { Response } from 'express';
import { UsersService } from './users.service';
export declare class UsersImportController {
    private readonly usersService;
    constructor(usersService: UsersService);
    importFromExcel(file: Express.Multer.File): Promise<{
        created: number;
        errors: {
            row: number;
            dni: string;
            error: string;
        }[];
    }>;
    downloadTemplate(res: Response): Promise<void>;
}
