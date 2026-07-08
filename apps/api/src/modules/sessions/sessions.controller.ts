import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { SessionsService } from './sessions.service';
import { ZodValidationPipe } from '../../common/pipes/zod-validation.pipe';
import { createSessionSchema } from './schemas/create-session.schema';
import { updateSessionSchema } from './schemas/update-session.schema';

@Controller('sessions')
export class SessionsController {
  constructor(private readonly sessionsService: SessionsService) {}

  @Get()
  async list(@Query('ownerId') ownerId: string) {
    return this.sessionsService.list(ownerId);
  }

  @Post()
  async create(
    @Body(new ZodValidationPipe(createSessionSchema)) body: any,
  ) {
    return this.sessionsService.create(body);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.sessionsService.remove(id);
    return null;
  }

  @Patch(':id')
  async patchUpdate(
    @Param('id') id: string,
    @Body(new ZodValidationPipe(updateSessionSchema)) body: any,
  ) {
    return this.sessionsService.update(id, body);
  }

  @Put(':id')
  async putUpdate(
    @Param('id') id: string,
    @Body(new ZodValidationPipe(updateSessionSchema)) body: any,
  ) {
    return this.sessionsService.update(id, body);
  }
}