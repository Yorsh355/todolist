// DTO para excluir información sencible
import { Exclude, Expose } from 'class-transformer';

export class UserDto {
  //Nombre del usuario
  @Expose()
  userFirstName: string;

  //Apellido del usuario
  @Expose()
  userLastName?: string;

  //nombre de usuario
  @Expose()
  userName: string;

  //Correo del usuario
  @Expose()
  userEmail: string;

  @Expose()
  userIdent: number;

  //Clave usuario
  @Exclude()
  userPassword: string;

  @Expose()
  userCreate: number;
}
