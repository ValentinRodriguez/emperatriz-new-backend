import { Controller, Get, Post, Body, Param, Delete, ParseUUIDPipe, Query, Put } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { PaginationDto } from './../../common/dtos/pagination.dto';

import { Products } from './entities/product.entity';

import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

import { Users } from '../auth/entities/user.entity';
import { GetUser } from '../auth/decorators';

import { ProductsService } from './products.service';

@ApiTags('Products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()   
  @ApiResponse({ status: 201, description: 'Product was created', type: Products  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related.' })
  create(
    @Body() createProductDto: CreateProductDto,
    @GetUser() user: Users,
  ) {
    return this.productsService.create(createProductDto, user );
  }

  @Get()
  findAll( @Query() paginationDto:PaginationDto ) {
    return this.productsService.findAll( paginationDto );
  }

  @Get(':term')
  findOne(@Param( 'term' ) term: string) {
    return this.productsService.findOnePlain( term );
  }

  @Put(':id')
  update(
    @Param('id', ParseUUIDPipe ) id: string, 
    @GetUser() user: Users,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.productsService.update( id, updateProductDto, user );
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe ) id: string) {
    return this.productsService.remove( id );
  }
}
