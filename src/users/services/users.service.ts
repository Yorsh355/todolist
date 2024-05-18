import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UsersRepository } from '../repositories/users.repository';
import { HttpResponse } from '../../common/HttpResponse';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) {}

  //Servicio para crear usuarios
  async createUser(createUserDto: CreateUserDto): Promise<HttpResponse> {
    try {
      console.log('SERVICIO::', createUserDto);

      const {
        userFirstName,
        userLastName,
        userName,
        userEmail,
        userIdent,
        userPassword,
      } = createUserDto;

      //const user = this.usersRepository.create(createUserDto);

      //console.log('USER::', user);

      const newUser = await this.usersRepository.save({
        userFirstName,
        userLastName,
        userName,
        userEmail,
        userIdent,
        userPassword,
      });

      //console.log('USER::', newUser);

      return HttpResponse.create(HttpStatus.OK, {
        message: 'OK',
        friendlyMessage: 'Acción procesada',
        entity: newUser,
      });
    } catch (error) {
      console.error(error);
      return HttpResponse.create(HttpStatus.BAD_REQUEST, {
        status: 'error',
        message: 'message.error',
        friendlyMessage: 'error',
      });
    }
  }
}
