import { ProviderService } from './provider.service';
import { ProviderEntity } from './entities/provider.entity';
import { CreateProviderDTO } from './dto/create-provider.input';
import { UpdateProviderInput } from './dto/update-provider.input';
import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put, Query } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { GetUser } from '../auth/decorators';
import { UserEntity } from '../auth/entities/user.entity';
import { PaginationDto } from 'src/common/dtos/pagination.dto';

@ApiTags('Providers')
@Controller('providers')
export class ProviderController {
  constructor(private readonly providerService: ProviderService) {}

  @Post()   
  @ApiResponse({ status: 201, description: 'Product was created', type: ProviderEntity  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related.' })
  createProvider(
    @Body('createProviderInput') createProviderInput: CreateProviderDTO,
    @GetUser() user: UserEntity
  ) {
    return this.providerService.create(createProviderInput);
  }

  @Get()
  findAll( @Query() paginationDto:PaginationDto ) {
    return this.providerService.findAll();
  }

  @Get(':term')
  findOne(@Param( 'term' ) term: string) {
    return this.providerService.findOne(term);
  }
  @Put(':id')
  update(
    @Param('id', ParseUUIDPipe ) id: string, 
    @GetUser() user: UserEntity,
    @Body() updateProviderInput: UpdateProviderInput) {
    return this.providerService.update(updateProviderInput.id, updateProviderInput);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe ) id: string) {
    return this.providerService.remove(id);
  }
}
