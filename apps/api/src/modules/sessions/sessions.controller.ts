import { Controller, Get, Post, Body, Delete, Param, Query, UsePipes } from '@nestjs/common';
import { SessionsService } from './sessions.service';
import { ZodValidationPipe } from '../../common/pipes/zod-validation.pipe';
import { createSessionSchema } from './schemas/create-session.schema';

@Controller('sessions')
export class SessionsController {
  constructor(private readonly sessionsService: SessionsService) {}

  @Get()
  async list(@Query('ownerId') ownerId: string) {
    return this.sessionsService.list(ownerId);
  }

  @Post()
  @UsePipes(new ZodValidationPipe(createSessionSchema))
  async create(@Body() body: any) {
    return this.sessionsService.create(body);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.sessionsService.remove(id);
    return null;
  }
}