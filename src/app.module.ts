import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProofController } from "./proof/proof.controller";
import { CategoriesController } from './controllers/categories.controller';
import { ProductsController } from './controllers/products.controller';
import { ProductsService } from './services/products.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    ProofController,
    ProductsController,
    CategoriesController
  ],
  providers: [
    AppService,
    ProductsService
  ],
})
export class AppModule {}
