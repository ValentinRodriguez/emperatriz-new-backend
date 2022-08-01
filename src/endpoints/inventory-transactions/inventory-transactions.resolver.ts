import { InventoryTransactionsService } from './inventory-transactions.service';
import { InventoryTransactions } from './entities/inventory-transaction.entity';
import { CreateInventoryTransactionDTO } from './dto/create-inventory-transaction.input';
import { UpdateInventoryTransactionDTO } from './dto/update-inventory-transaction.input';
import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put, Query } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { GetUser } from '../auth/decorators';
import { Users } from '../auth/entities/user.entity';
import { PaginationDto } from 'src/common/dtos/pagination.dto';

@ApiTags('InventoryTransactions')
@Controller('inventory-transactions')
export class InventoryTransactionsController {

  constructor(private readonly inventoryTransactionsService: InventoryTransactionsService) {}

  @Post()   
  @ApiResponse({ status: 201, description: 'Product was created', type: InventoryTransactions  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related.' })
  createInventoryTransaction(
    @Body() createInventoryTransactionInput: CreateInventoryTransactionDTO,
    @GetUser() user: Users
  ) {
    return this.inventoryTransactionsService.create(createInventoryTransactionInput);
  }

  @Get()
  findAll( @Query() paginationDto:PaginationDto ) {
    return this.inventoryTransactionsService.findAll();
  }

  @Get(':term')
  findOne(@Param( 'term' ) term: string) {
    return this.inventoryTransactionsService.findOne(term);
  }

  @Put(':id')
  update(
    @Param('id', ParseUUIDPipe ) id: string, 
    @GetUser() user: Users,
    @Body() updateInventoryTransactionInput: UpdateInventoryTransactionDTO
  ) {
    return this.inventoryTransactionsService.update(id, updateInventoryTransactionInput);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe ) id: string) {
    return this.inventoryTransactionsService.remove(id);
  }
}

  

