import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put, Query, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { PaginationDto } from './../../common/dtos/pagination.dto';

import { Products } from './entities/product.entity';

import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

import { GetUser } from '../auth/decorators';
import { Users } from '../auth/entities/user.entity';

import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { ProductsService } from './products.service';

@ApiTags('Products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()   
  @ApiResponse({ status: 201, description: 'Product was created', type: Products  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related.' })
  @UseInterceptors(AnyFilesInterceptor())
  create(
    @Body() createProductDto: CreateProductDto,
    @GetUser() user: Users,
    @UploadedFiles() files: Array<Express.Multer.File>
  ) {          
    return this.productsService.createRegister(createProductDto, user, files );
  }

  @Get()
  findAll( @Query() paginationDto:PaginationDto ) {
    return this.productsService.findAllRegisters( paginationDto );
  }

  @Get(':term')
  findOne(@Param( 'term' ) term: string) {
    return this.productsService.findRegisters( term );
  }

  @Put(':id')
  update(
    @Param('id', ParseUUIDPipe ) id: string, 
    @GetUser() user: Users,
    @Body() updateProductDto: UpdateProductDto ) {
    return this.productsService.updateRegister( id, updateProductDto, user );
  }

  @Delete(':id')
  remove(
    @Param('id', ParseUUIDPipe ) id: string, 
    @GetUser() user: Users,) {
    return this.productsService.removeRegister( id, user );
  }
}


