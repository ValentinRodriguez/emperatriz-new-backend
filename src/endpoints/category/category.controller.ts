import { CategoryService } from './category.service';
import { Category } from './entities/category.entity';
import { CreateCategoryDTO } from './dto/create-category.input';
import { UpdateCategoryDTO } from './dto/update-category.input';
import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put, Query } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetUser } from '../auth/decorators';
import { Users } from '../auth/entities/user.entity';
import { PaginationDto } from 'src/common/dtos/pagination.dto';

@ApiTags('Category')
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()   
  @ApiResponse({ status: 201, description: 'Product was created', type: Category  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related.' })
  createCategory(
    @Body() createCategoryInput: CreateCategoryDTO,
    @GetUser() user: Users,) {
    return this.categoryService.createRegister(createCategoryInput, user);
  }

  @Get()
  findAll( @Query() paginationDto:PaginationDto ) {
    return this.categoryService.findAllRegisters(paginationDto);
  }

  @Get(':term')
  findOne(@Param( 'term' ) term: string) {
    return this.categoryService.findRegisters(term);
  }

  @Put(':id')
  updateCategory(
    @Param('id', ParseUUIDPipe ) id: string, 
    @GetUser() user: Users,
    @Body() updateCategoryInput: UpdateCategoryDTO,
  ) {
    console.log(updateCategoryInput);    
    return this.categoryService.updateRegister(id, updateCategoryInput,user);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe ) id: string, @GetUser() user:Users) {
    return this.categoryService.removeRegister(id,user);
  }
}
