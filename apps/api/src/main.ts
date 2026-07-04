import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  app.enableCors();
  await app.listen(4000);
  console.log('Nest API listening on http://localhost:4000/api/v1');
}
bootstrap();