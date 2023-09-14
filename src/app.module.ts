import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProofController } from "./proof/proof.controller";
import { CategoriesController } from './controllers/categories.controller';
import { ProductsController } from './controllers/products.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    ProofController,
    ProductsController,
    CategoriesController
  ],
  providers: [AppService],
})
export class AppModule {}
