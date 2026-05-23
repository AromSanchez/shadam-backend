import { IsString, Length } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name!: string;

  @IsString()
  @Length(8, 8, { message: 'El DNI debe tener 8 dígitos' })
  dni!: string;
}