import { Module } from '@nestjs/common';
import { HttpModule, HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProofController } from "./proof/proof.controller";
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';

const API_KEY = process.env.API_KEY;
const API_KEY_PROD = process.env.API_KEY_PROD;

@Module({
  imports: [HttpModule, ProductsModule, UsersModule],
  controllers: [
    AppController,
    ProofController
  ],
  providers: [
    AppService, //useClass
    {
      provide: 'API_KEY',
      useValue: process.env.APP_ENV === 'production' ? API_KEY_PROD : API_KEY,
    },
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
