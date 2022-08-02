
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { ColumnsService } from './columns.service';
import { Columns } from './entities/column.entity';
import { CreateColumnInput } from './dto/create-column.input';
import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { PaginationDto } from 'src/common/dtos/pagination.dto';

@ApiTags('Columns')
@Controller('columns')
export class ColumnsController {
  constructor(private readonly columnsService: ColumnsService) {}

  @Post()   
  @ApiResponse({ status: 201, description: 'Product was created', type: Columns  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related.' })
  createColumn(
    @Body() createColumnInput: CreateColumnInput) {
    return this.columnsService.create(createColumnInput);
  }

  @Get()
  findAll() {
    return this.columnsService.findAll();
  }

  @Get(':term')   
  findOne(@Param( 'term' ) form: string): Promise<Columns[]> {
    return this.columnsService.findOne(form);
  }
}
