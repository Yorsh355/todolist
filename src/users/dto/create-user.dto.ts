import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  //Nombre del usuario
  @IsNotEmpty()
  @IsString()
  firstName: string;

  //Apellido del usuario
  @IsNotEmpty()
  @IsString()
  lastName: string;

  //nombre de usuario
  @IsNotEmpty()
  @IsString()
  userName: string;

  //Correo del usuario
  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsNumber()
  ident: number;

  //Clave usuario
  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsNumber()
  userCreate: number;
}
