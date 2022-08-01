import { PaymentConditionService } from './payment-condition.service';
import { PaymentConditionEntity } from './entities/payment-condition.entity';
import { CreatePaymentConditionDTO } from './dto/create-payment-condition.input';
import { UpdatePaymentConditionInput } from './dto/update-payment-condition.input';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put, Query } from '@nestjs/common';
import { GetUser } from '../auth/decorators';
import { UserEntity } from '../auth/entities/user.entity';
import { PaginationDto } from 'src/common/dtos/pagination.dto';

@ApiTags('Products')
@Controller('products')
export class PaymentConditionController {
  constructor(private readonly paymentConditionService: PaymentConditionService) {}

  @Post()   
  @ApiResponse({ status: 201, description: 'Product was created', type: PaymentConditionEntity  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related.' })
  createPaymentCondition(
    @Body() createPaymentConditionInput: CreatePaymentConditionDTO,
    @GetUser() user: UserEntity
  ) {
    return this.paymentConditionService.create(createPaymentConditionInput);
  }

  @Get()
  findAll( @Query() paginationDto:PaginationDto ) {
    return this.paymentConditionService.findAll();
  }

  @Get(':term')
  findOne(@Param( 'term' ) term: string) {
    return this.paymentConditionService.findOne(term);
  }

  @Put(':id')
  update(
    @Param('id', ParseUUIDPipe ) id: string, 
    @GetUser() user: UserEntity,
    @Body() updatePaymentConditionInput: UpdatePaymentConditionInput
  ) {   
      return this.paymentConditionService.update(id, updatePaymentConditionInput);  
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe ) id: string) {
    return this.paymentConditionService.remove(id);
  }
}
