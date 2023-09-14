import { Controller, Get, Post, Put, Delete, Param, Query, Body, HttpCode, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('products')
export class ProductsController {
  @Get()
  getList(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return {
      message:`products limit=> ${limit} offset=> ${offset} brand=> ${brand}`
    }
  }

  @Get('filter')
  applyFilter() {
    return {
      message:`yo soy un filter`
    }
  }

  @Get(':productId')
  @HttpCode(HttpStatus.OK)
  getOne(@Param('productId') productId: string) {
    return {
      message:`product ${productId}`
    }
  }

  @Get('express/:productId')
  @HttpCode(HttpStatus.OK)
  getWithExpress(@Res() response: Response, @Param('productId') productId: string) {
    response.status(200).send({
      message:`product ${productId}`
    });
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() payload: any) {
    return {
      message: 'Create action',
      payload,
    };
  }

  @Put(':idProduct')
  update(@Param('idProduct') idProduct: string, @Body() payload: any): any {
    return {
      message: 'Update action',
      idProduct,
      payload
    };
  }

  @Delete(':idProduct')
  delete(@Param('idProduct') idProduct: number) {
    return {
      message: 'Delete action',
      idProduct
    };
  }
}
