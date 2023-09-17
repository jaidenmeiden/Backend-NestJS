import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HttpModule, HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProofController } from "./proof/proof.controller";
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { environment } from './environment';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: environment[process.env.APP_ENV] || '.env.local',
      isGlobal: true,
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
