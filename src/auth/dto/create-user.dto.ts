import { IsString, IsOptional, IsEnum, Length } from 'class-validator';
import { PensionerType } from '../../../generated/prisma/client';

export class CreateUserDto {
  @IsString()
  name!: string;

  @IsString()
  @Length(8, 8, { message: 'El DNI debe tener 8 dígitos' })
  dni!: string;

  @IsOptional()
  @IsEnum(PensionerType)
  pensioner_type?: PensionerType;
}
