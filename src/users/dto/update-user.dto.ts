import { PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateUserDto {
  //Nombre del usuario
  @IsOptional()
  @IsString()
  userFirstName?: string;

  //Nombre del usuario
  @IsOptional()
  @IsString()
  userLastName?: string;

  //Nombre del usuario
  @IsOptional()
  @IsString()
  userName?: string;

  //Nombre del usuario
  @IsOptional()
  @IsString()
  userEmail?: string;

  //Nombre del usuario
  @IsOptional()
  @IsNumber()
  userIdent?: number;

  @IsNotEmpty()
  @IsNumber()
  userUpdate: number;
}
