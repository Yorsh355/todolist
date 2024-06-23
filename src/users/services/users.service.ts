import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UsersRepository } from '../repositories/users.repository';
import { HttpResponse } from '../../common/HttpResponse';
import { formateDate } from '../../common/utils/dates/formatDates';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) {}

  //Servicio para crear usuarios
  async createUser(createUserDto: CreateUserDto): Promise<HttpResponse> {
    try {
      const newUser = await this.usersRepository.save(createUserDto);

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

  //Servicio para traer todos los usuarios
  async findAllUsers(): Promise<HttpResponse> {
    try {
      const findUsers = await this.usersRepository.findAll();

      const formattedAllUserDate = findUsers.map((user) => ({
        ...user,
        userCreateDate: formateDate(user.userCreateDate),
        userUpdateDate: user.userUpdateDate
          ? formateDate(user.userUpdateDate)
          : null,
      }));

      return HttpResponse.create(HttpStatus.OK, {
        message: 'OK',
        friendlyMessage: 'Acción procesada',
        entity: formattedAllUserDate,
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

  //Servicio para traer todos los usuarios
  async findUserById(userId: string): Promise<HttpResponse> {
    try {
      const findUser = await this.usersRepository.findOneByCondition({
        where: { userId },
      });

      return HttpResponse.create(HttpStatus.OK, {
        message: 'OK',
        friendlyMessage: 'Acción procesada',
        entity: findUser,
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
