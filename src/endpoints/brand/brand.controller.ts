import { BrandService } from './brand.service';
import { Brands } from './entities/brand.entity';
import { CreateBrandInput } from './dto/create-brand.input';
import { UpdateBrandInput } from './dto/update-brand.input';
import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put, Query } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { GetUser } from '../auth/decorators';
import { Users } from '../auth/entities/user.entity';
import { PaginationDto } from 'src/common/dtos/pagination.dto';

@ApiTags('Brand')
@Controller('brand')
export class BrandController {
  
  constructor(private readonly brandService: BrandService) {}

  @Post()   
  @ApiResponse({ status: 201, description: 'Product was created', type: Brands  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related.' })
  createBrand(@Body() createBrandInput: CreateBrandInput) {
    return this.brandService.create(createBrandInput);
  }

  @Get()
  findAll( @Query() paginationDto:PaginationDto ) {
    return this.brandService.findAll();
  }

  @Get(':term')
  findOne(@Param( 'term' ) term: string) {
    return this.brandService.findOne(term);
  }

  @Put(':id')
  updateBrand(
    @Param('id', ParseUUIDPipe ) id: string, 
    @Body() updateBrandInput: UpdateBrandInput,
    @GetUser() user: Users) {
    return this.brandService.update(updateBrandInput.id, updateBrandInput);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe ) id: string) {
    return this.brandService.remove(id);
  }
}
