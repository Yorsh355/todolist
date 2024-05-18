import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  //Nombre del usuario
  @IsNotEmpty()
  @IsString()
  userFirstName: string;

  //Apellido del usuario
  @IsOptional()
  @IsString()
  userLastName?: string;

  //nombre de usuario
  @IsNotEmpty()
  @IsString()
  userName: string;

  //Correo del usuario
  @IsNotEmpty()
  @IsString()
  userEmail: string;

  @IsNotEmpty()
  @IsNumber()
  userIdent: number;

  //Clave usuario
  @IsNotEmpty()
  @IsString()
  userPassword: string;
}
