
import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
import { RolHasAccess } from '../auth/decorators';
import { AccountCatalogueService } from './account-catalogue.service';
import { CreateAccountCatalogueDTO } from './dto/create-account-catalogue.input';
import { UpdateAccountCatalogueDTO } from './dto/update-account-catalogue.input';
import { AccountCatalogue } from './entities/account-catalogue.entity';

@ApiTags('Account-Catalogue')
@Controller('account_catalogue')
export class AccountCatalogueController {

  constructor(private readonly accountCatalogueService: AccountCatalogueService) {}
  
  @Post()
  @ApiResponse({ status: 201, description: 'Product was created', type: AccountCatalogue  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related.' })
  createAccountCatalogue(@Body() createAccountCatalogueDTO: CreateAccountCatalogueDTO) {
    return this.accountCatalogueService.create(createAccountCatalogueDTO);
  }

  @Get()
  @RolHasAccess()
  findAll(@Query() paginationDto:PaginationDto ) {
    return this.accountCatalogueService.findAll();
  }

  @Get(':term')   
  findOne(@Param( 'term' ) term: string) {
    return this.accountCatalogueService.findOne(term);
  }

  @Put(':id')   
  updateAccountCatalogue(@Param( 'id' ) updateAccountCatalogueInput: UpdateAccountCatalogueDTO) {
    return this.accountCatalogueService.update(updateAccountCatalogueInput.id, updateAccountCatalogueInput);
  }

  @Delete(':id')   
  removeAccountCatalogue(@Param( 'id' ) id: string) {
    return this.accountCatalogueService.remove(id);
  }
}
