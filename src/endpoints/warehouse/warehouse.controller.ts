import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put, Query } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { WarehouseService } from './warehouse.service';
import { Warehouses } from './entities/warehouse.entity';
import { CreateWarehouseDTO } from './dto/create-warehouse.input';
import { UpdateWarehouseInput } from './dto/update-warehouse.input';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
import { GetUser } from '../auth/decorators';
import { Users } from '../auth/entities/user.entity';

@ApiTags('Warehouse')
@Controller('warehouse')
export class WarehouseController {
  constructor(private readonly warehouseService: WarehouseService) {}

  @Post()   
  @ApiResponse({ status: 201, description: 'Product was created', type: Warehouses  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related.' })
  createWarehouse(@Body() createWarehouseDTO: CreateWarehouseDTO) {
    return this.warehouseService.create(createWarehouseDTO);
  }

  @Get()
  findAll( @Query() paginationDto:PaginationDto ) {
    return this.warehouseService.findAll();
  }

  @Get(':term')
  findOne(@Param( 'term' ) term: string) {
    return this.warehouseService.findOne(term);
  }

  @Put(':id')
  updateWarehouse(
    @Param('id', ParseUUIDPipe ) id: string, 
    @GetUser() user: Users,
    @Body() updateWarehouseInput: UpdateWarehouseInput
  ) {
    return this.warehouseService.update(updateWarehouseInput.id, updateWarehouseInput);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe ) id: string) {    
    return this.warehouseService.remove(id);
  }
}
