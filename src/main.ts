import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config as loadEnvConfig } from 'dotenv';
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {

  await loadEnvConfig();
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(process.env.SERVER_PORT);
}
bootstrap();
