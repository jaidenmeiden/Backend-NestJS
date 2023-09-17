import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

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

  const config = new DocumentBuilder()
    .setTitle('Nest.js API')
    .setDescription('Experiments')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
  app.enableCors();
  await app.listen(process.env.APP_PORT || 8080);
}
bootstrap();
