import { CategoryService } from './category.service';
import { CategoryEntity } from './entities/category.entity';
import { CreateCategoryDTO } from './dto/create-category.input';
import { UpdateCategoryDTO } from './dto/update-category.input';
import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put, Query } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetUser } from '../auth/decorators';
import { UserEntity } from '../auth/entities/user.entity';
import { PaginationDto } from 'src/common/dtos/pagination.dto';

@ApiTags('Category')
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()   
  @ApiResponse({ status: 201, description: 'Product was created', type: CategoryEntity  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related.' })
  createCategory(
    @Body() createCategoryInput: CreateCategoryDTO,
    @GetUser() user: UserEntity,) {
    console.log(createCategoryInput); 
    return this.categoryService.create(createCategoryInput);
  }

  @Get()
  findAll( @Query() paginationDto:PaginationDto ) {
    return this.categoryService.findAll();
  }

  @Get(':term')
  findOne(@Param( 'term' ) term: string) {
    return this.categoryService.findOne(term);
  }

  @Put(':id')
  updateCategory(
    @Param('id', ParseUUIDPipe ) id: string, 
    @GetUser() user: UserEntity,
    @Body() updateCategoryInput: UpdateCategoryDTO,
  ) {
    console.log(updateCategoryInput);    
    return this.categoryService.update(updateCategoryInput.id, updateCategoryInput);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe ) id: string) {
    return this.categoryService.remove(id);
  }
}
