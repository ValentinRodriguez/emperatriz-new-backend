import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put, Query } from '@nestjs/common';
import { PaymentConditionService } from './payment-condition.service';
import { PaymentConditions } from './entities/payment-condition.entity';
import { CreatePaymentConditionDTO } from './dto/create-payment-condition.input';
import { UpdatePaymentConditionInput } from './dto/update-payment-condition.input';
import { GetUser, IsPublic } from '../auth/decorators';
import { Users } from '../auth/entities/user.entity';
import { PaginationDto } from 'src/common/dtos/pagination.dto';

@ApiTags('PaymentCondition')
@Controller('payment-condition')
export class PaymentConditionController {
  constructor(private readonly paymentConditionService: PaymentConditionService) {}

  @Post()   
  @ApiResponse({ status: 201, description: 'Product was created', type: PaymentConditions  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related.' })
  createPaymentCondition(
    @Body() createPaymentConditionInput: CreatePaymentConditionDTO,
    @GetUser() user: Users
  ) {
    return this.paymentConditionService.create(createPaymentConditionInput);
  }

  @Get()
  @IsPublic()
  findAll( @Query() paginationDto:PaginationDto ) {
    return this.paymentConditionService.findAllRegisters(paginationDto);
  }

  @Get(':term')
  findOne(@Param( 'term' ) term: string) {
    return this.paymentConditionService.findOne(term);
  }

  @Put(':id')
  update(
    @Param('id', ParseUUIDPipe ) id: string, 
    @GetUser() user: Users,
    @Body() updatePaymentConditionInput: UpdatePaymentConditionInput
  ) {   
      return this.paymentConditionService.update(id, updatePaymentConditionInput);  
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe ) id: string) {
    return this.paymentConditionService.remove(id);
  }
}
