import { Controller, Get, Post, Body, Delete, Param, UsePipes } from '@nestjs/common';
import { UsersService } from './users.service';
import { createUserSchema } from './schemas/create-user.schema';
import { ZodValidationPipe } from '../../common/pipes/zod-validation.pipe';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll() {
    return this.usersService.findAll();
  }

  @Post()
  @UsePipes(new ZodValidationPipe(createUserSchema))
  async create(@Body() body: any) {
    return this.usersService.create(body);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.usersService.remove(id);
    return null;
  }
}