import { CurrencyService } from './currency.service';
import { Currencies } from './entities/currency.entity';
import { CreateCurrencyDTO } from './dto/create-currency.input';
import { UpdateCurrencyInput } from './dto/update-currency.input';
import { Body, Controller, Post, Put, Param, ParseUUIDPipe, Delete, Query, Get } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { GetUser, IsPublic } from '../auth/decorators';
import { Users } from '../auth/entities/user.entity';

@ApiTags('Currency')
@Controller('currency')
export class CurrencyController {
  constructor(private readonly currencyService: CurrencyService) {}

  @Post()   
  @ApiResponse({ status: 201, description: 'Product was created', type: Currencies  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related.' })
  createCurrency(
    @Body() createCurrencyDTO: CreateCurrencyDTO,
    @GetUser() user: Users,
  ) {
    return this.currencyService.create(createCurrencyDTO);
  }

  @Get()
  // @IsPublic()
  findAll() {
    return this.currencyService.findAllRegisters();
  }

  @Get(':term')
  findOne(@Param( 'term' ) term: string) {
    return this.currencyService.findOne(term);
  }
  
  @Put(':id')
  updateCurrency(
    @Param('id', ParseUUIDPipe ) id: string, 
    @Body() updateCurrencyInput: UpdateCurrencyInput,
    @GetUser() user: Users
  ) {
    return this.currencyService.update(updateCurrencyInput.id, updateCurrencyInput);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe ) id: string) {
    return this.currencyService.remove(id);
  }
}

