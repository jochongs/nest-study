import { Body, ConflictException, Controller, Get, InternalServerErrorException, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService
    ) {}

    @Post('/')
    @UsePipes(ValidationPipe)
    async createUser(
        @Body() createUserDto: CreateUserDto
    ) {
        await this.userService.createUser(createUserDto);
    }
}
 