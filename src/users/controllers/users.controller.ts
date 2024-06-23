import { Controller, Post, Body, Res, Get, Param, Patch } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { HttpResponse } from '../../common/HttpResponse';
import { Response } from 'express';
import { UpdateUserDto } from '../dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  //Ruta para crear usuarios
  @Post()
  async createUser(
    @Res() response: Response,
    @Body() createUserDto: CreateUserDto,
  ): Promise<void> {
    const httpResponse = await this.usersService.createUser(createUserDto);

    HttpResponse.convertToExpress(response, httpResponse);
  }

  // Ruta para consultar todos los usuarios
  @Get()
  async findAllUsers(@Res() response: Response): Promise<void> {
    const httpResponse = await this.usersService.findAllUsers();

    HttpResponse.convertToExpress(response, httpResponse);
  }

  @Get('/:userId')
  async findUserById(
    @Res() response: Response,
    @Param('userId') userId: string,
  ): Promise<void> {
    const httpResponse = await this.usersService.findUserById(userId);

    HttpResponse.convertToExpress(response, httpResponse);
  }

  @Patch(':userId')
  async updateUser(
    @Res() response: Response,
    @Param('userId') userId: string,
    @Body() upateUserDto: UpdateUserDto,
  ): Promise<void> {
    const httpResponse = await this.usersService.updateUser(
      userId,
      upateUserDto,
    );

    HttpResponse.convertToExpress(response, httpResponse);
  }
}
