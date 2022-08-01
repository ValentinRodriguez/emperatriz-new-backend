import { EnterpriseService } from './enterprise.service';
import { EnterpriseEntity } from './entities/enterprise.entity';
import { CreateEnterpriseDTO } from './dto/create-enterprise.input';
import { UpdateEnterpriseInput } from './dto/update-enterprise.input';
import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put, Query } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetUser } from '../auth/decorators';
import { UserEntity } from '../auth/entities/user.entity';

@ApiTags('Enterprise')
@Controller('enterprise')
export class EnterpriseController {
  
  constructor(private readonly enterpriseService: EnterpriseService) {}

  @Post()   
  @ApiResponse({ status: 201, description: 'Product was created', type: EnterpriseEntity  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related.' })
  createEnterprise(
    @Body() createEnterpriseInput: CreateEnterpriseDTO,
    @GetUser() user: UserEntity
  ) {
    return this.enterpriseService.create(createEnterpriseInput);
  }

  @Get(':term')
  findOne(@Param( 'term' ) term: string) {
    return this.enterpriseService.findOne(term);
  }

  @Put(':id')
  updateEnterprise(
    @Param('id', ParseUUIDPipe ) id: string,
    @Body() updateEnterpriseInput: UpdateEnterpriseInput,
    @GetUser() user: UserEntity,) {
    return this.enterpriseService.update(updateEnterpriseInput.id, updateEnterpriseInput);
  }

  @Delete(':id')
  removeEnterprise(@Param('id', ParseUUIDPipe) id: string) {
    return this.enterpriseService.remove(id);
  }
}
