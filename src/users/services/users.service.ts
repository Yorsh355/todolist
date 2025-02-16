import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UsersRepository } from '../repositories/users.repository';
import { HttpResponse } from '../../common/HttpResponse';
import { formateDate } from '../../common/utils/dates/formatDates';
import { UpdateUserDto } from '../dto/update-user.dto';
import { plainToClass } from 'class-transformer';
import { UserDto } from '../dto/user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) {}

  //Servicio para crear usuarios
  async createUser(createUserDto: CreateUserDto): Promise<HttpResponse> {
    try {
      const { password, ...userData } = createUserDto;

      const newUser = await this.usersRepository.save({
        ...userData,
        password: bcrypt.hashSync(password, 10),
      });

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
        createdDate: formateDate(user.createdDate),
        updatedDate: user.updatedDate ? formateDate(user.updatedDate) : null,
      }));

      const usersDto = formattedAllUserDate.map((user) =>
        plainToClass(UserDto, user),
      );

      return HttpResponse.create(HttpStatus.OK, {
        message: 'OK',
        friendlyMessage: 'Acción procesada',
        entity: usersDto,
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
  async findUserById(id: string): Promise<HttpResponse> {
    try {
      const findUser = await this.usersRepository.findOneByCondition({
        where: { id },
      });

      if (!findUser) {
        return HttpResponse.create(HttpStatus.NOT_FOUND, {
          message: 'No user found',
          friendlyMessage: 'No hay elementos para mostrar',
        });
      }

      const userDto = plainToClass(UserDto, findUser);

      return HttpResponse.create(HttpStatus.OK, {
        message: 'OK',
        friendlyMessage: 'Acción procesada',
        entity: userDto,
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

  //Sercicio para actualizar un usuario
  async updateUser(
    userId: string,
    upateUserDto: UpdateUserDto,
  ): Promise<HttpResponse> {
    try {
      const findUserResponse = await this.findUserById(userId);

      if (!findUserResponse.body.entity) {
        return HttpResponse.create(HttpStatus.NOT_FOUND, {
          message: 'No user found',
          friendlyMessage: `No hay registros con id ${userId}`,
        });
      }

      const user = findUserResponse.body.entity;

      const updatedUser = await this.usersRepository.save({
        ...user,
        ...upateUserDto,
        userUpdateDate: formateDate(new Date()),
      });

      const userDto = plainToClass(UserDto, updatedUser);

      return HttpResponse.create(HttpStatus.OK, {
        message: 'OK',
        friendlyMessage: 'Acción procesada',
        entity: userDto,
      });
    } catch (error) {
      return HttpResponse.create(HttpStatus.BAD_REQUEST, {
        status: 'error',
        message: 'message.error',
        friendlyMessage: 'error',
      });
    }
  }
}

