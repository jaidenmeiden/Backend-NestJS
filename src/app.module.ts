import { Module } from '@nestjs/common';
import { HttpModule, HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs'
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProofController } from "./proof/proof.controller";
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { environment } from './environment';
import config from './config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: environment[process.env.START_APP_ENV] || '.env.local',
      load: [config],
      isGlobal: true,
      validationSchema: Joi.object({
        API_KEY: Joi.string().required(),
        DB_CONNECTION: Joi.string().required(),
        DB_HOST: Joi.string().required(),
        DB_PORT: Joi.number().required(),
      })
    }),
    HttpModule,
    ProductsModule,
    UsersModule,
    DatabaseModule
  ],
  controllers: [
    AppController,
    ProofController
  ],
  providers: [
    AppService, //useClass
    {
      provide: 'DATA',
      useFactory: async (http: HttpService) => {
        const request = http.get('https://jsonplaceholder.typicode.com/todos');
        const tasks = await lastValueFrom(request);
        return tasks.data;
      },
      inject: [HttpService],
    },
  ],
})
export class AppModule {}
