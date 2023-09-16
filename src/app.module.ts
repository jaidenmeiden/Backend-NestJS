import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProofController } from "./proof/proof.controller";
import { CategoriesController } from './controllers/categories.controller';
import { ProductsController } from './controllers/products.controller';
import { BrandsController } from './controllers/brands.controller';
import { CustomerController } from './controllers/customers.controller';
import { UsersController } from './controllers/users.controller';
import { CategoriesService } from './services/categories.service';
import { ProductsService } from './services/products.service';
import { BrandsService } from './services/brands.service';
import { CustomersService } from './services/customers.service';
import { UsersService } from './services/users.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    ProofController,
    ProductsController,
    CategoriesController,
    BrandsController,
    CustomerController,
    UsersController,
  ],
  providers: [
    AppService,
    ProductsService,
    CategoriesService,
    BrandsService,
    CustomersService,
    UsersService,
  ],
})
export class AppModule {}
