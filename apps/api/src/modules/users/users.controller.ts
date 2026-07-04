import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { ZodError } from 'zod';
import { UsersService } from './users.service';
import { createUserSchema } from './schemas/create-user.schema';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll() {
    const users = await this.usersService.findAll();
    return { success: true, data: users };
  }

  @Post()
  async create(@Body() body: any) {
    try {
      const payload = createUserSchema.parse(body);
      const user = await this.usersService.create(payload);
      return { success: true, data: user };
    } catch (err) {
      if (err instanceof ZodError) {
        const msg = err.errors.map((e) => e.message).join('; ');
        return { success: false, error: { code: 'validation_error', message: msg } };
      }
      return { success: false, error: { message: err instanceof Error ? err.message : 'Unexpected error' } };
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      await this.usersService.remove(id);
      return { success: true, data: null };
    } catch (err) {
      return { success: false, error: { message: err instanceof Error ? err.message : 'Unexpected error' } };
    }
  }
}