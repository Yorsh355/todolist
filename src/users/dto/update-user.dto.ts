import { PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateUserDto {
  // Nombre del usuario
  @IsOptional()
  @IsString()
  firstName?: string;

  // Nombre del usuario
  @IsOptional()
  @IsString()
  lastName?: string;

  // Apellido del usuario
  @IsOptional()
  @IsString()
  userName?: string;

  // Email
  @IsOptional()
  @IsString()
  email?: string;

  //Nombre del usuario
  @IsOptional()
  @IsNumber()
  ident?: number;

  @IsNotEmpty()
  @IsNumber()
  userUpdate: number;
}
