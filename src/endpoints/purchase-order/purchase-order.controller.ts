import { PurchaseOrderService } from './purchase-order.service';
import { CreatePurchaseOrderDTO } from './dto/create-purchase-order.input';
import { UpdatePurchaseOrderInput } from './dto/update-purchase-order.input';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put, Query } from '@nestjs/common';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
import { GetUser } from '../auth/decorators';
import { UserEntity } from '../auth/entities/user.entity';
import { ProductEntity } from '../products/entities/product.entity';

@ApiTags('PurchaseOrder')
@Controller('purchaseOrder')
export class PurchaseOrderController {
  constructor(private readonly purchaseOrderService: PurchaseOrderService) {}

  @Post()   
  @ApiResponse({ status: 201, description: 'Product was created', type: ProductEntity  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related.' })
  createPurchaseOrder(@Body() createPurchaseOrderInput: CreatePurchaseOrderDTO) {
    return this.purchaseOrderService.create(createPurchaseOrderInput);
  }

  @Get()
  findAll( @Query() paginationDto:PaginationDto ) {
    return this.purchaseOrderService.findAll();
  }

  @Get(':term')
  findOne(@Param( 'term' ) term: string) {
    return this.purchaseOrderService.findOne(term);
  }

  @Put(':id')
  update(
    @Param('id', ParseUUIDPipe ) id: string, 
    @GetUser() user: UserEntity,
    @Body() updatePurchaseOrderDto: UpdatePurchaseOrderInput,
  ) {
    return this.purchaseOrderService.update(id, updatePurchaseOrderDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe ) id: string) {
    return this.purchaseOrderService.remove( id );
  }
}
