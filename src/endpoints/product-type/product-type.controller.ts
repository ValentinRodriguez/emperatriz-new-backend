import { ProductTypeService } from './product-type.service';
import { ProductTypeEntity } from './entities/product-type.entity';
import { CreateProductTypeDTO } from './dto/create-product-type.input';
import { UpdateProductTypeDTO } from './dto/update-product-type.input';
import { Controller, Post, Body, Get, Param, Put, ParseUUIDPipe, Delete, Query } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
import { GetUser } from '../auth/decorators';
import { Users } from '../auth/entities/user.entity';


@ApiTags('ProductType')
@Controller('product-type')
export class ProductTypeController {

  constructor(private readonly productTypeService: ProductTypeService) {}

  @Post()   
  @ApiResponse({ status: 201, description: 'Product was created', type: ProductTypeEntity  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related.' })
  createProductType(
    @Body() createProductTypeInput: CreateProductTypeDTO,
    @GetUser() user: Users,) {
    return this.productTypeService.createRegister(createProductTypeInput, user);
  }

  @Get()
  findAll( @Query() paginationDto:PaginationDto ) {
    return this.productTypeService.findAllRegisters(paginationDto);
  }

  @Get(':term')
  findOne(@Param( 'term' ) term: string) {
    return this.productTypeService.findRegisters(term);
  }

  @Put(':id')
  update(
    @Param('id', ParseUUIDPipe ) id: string, 
    @GetUser() user: Users,
    @Body() updateProductTypeDTO: UpdateProductTypeDTO) {
    return this.productTypeService.updateRegister(id, updateProductTypeDTO, user);
  }

  @Delete(':id')
  remove(
    @Param('id', ParseUUIDPipe ) id: string, 
    @GetUser() user: Users,) {
    return this.productTypeService.removeRegister(id, user);
  }
}
