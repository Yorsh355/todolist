import { Controller, Post, Body, Res } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { HttpResponse } from '../../common/HttpResponse';

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
}
