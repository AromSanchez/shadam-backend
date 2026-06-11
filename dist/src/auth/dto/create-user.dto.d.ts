import { PensionerType } from '../../../generated/prisma/client';
export declare class CreateUserDto {
    name: string;
    dni: string;
    pensioner_type?: PensionerType;
}
