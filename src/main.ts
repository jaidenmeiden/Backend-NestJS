import * as dotenv from 'dotenv';
dotenv.config();
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,                    // Ignore data not included in DTO
      forbidNonWhitelisted: true,         // Throw error if prohibited data exists
      //disableErrorMessages: true,         // Disable error messages (production)
    })
  );
  await app.listen(process.env.APP_PORT || 8080);
}
bootstrap();
