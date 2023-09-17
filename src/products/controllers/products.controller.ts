import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

import { ProductsService } from "../services/products.service";
import { ParseIntCustomPipe } from "../../common/parse-int-custom/parse-int-custom.pipe";
import { CreateProductDto, UpdateProductDto } from "../dtos/products.dto";

@ApiTags('Products')
@Controller('products')
export class ProductsController {

  constructor(private productsService: ProductsService) {}

  @ApiOperation({ summary: 'Get products list.' })
  @Get()
  findAll(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return this.productsService.findAll();
  }

  @ApiOperation({ summary: 'Get product info.' })
  @Get(':id')
  info(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.findOne(+id);
  }

  @ApiOperation({ summary: 'Get product info with custom pipe.' })
  @Get('custom/:id')
  infoCustom(@Param('id', ParseIntCustomPipe) id: number) {
    return this.productsService.findOne(+id);
  }

  @ApiOperation({ summary: 'Create product.' })
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() payload: CreateProductDto) {
    return this.productsService.create(payload);
  }

  @ApiOperation({ summary: 'Update product.' })
  @Put(':id')
  update(@Param('id') id: string, @Body() payload: UpdateProductDto): any {
    return this.productsService.update(+id, payload);
  }

  @ApiOperation({ summary: 'Delete product.' })
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.productsService.remove(+id);
  }
}
