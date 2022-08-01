import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put, Query } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { ClientsService } from './clients.service';
import { Clients } from './entities/client.entity';
import { CreateClientDTO } from './dto/create-client.input';
import { UpdateClientDTO } from './dto/update-client.input';
import { GetUser } from '../auth/decorators';
import { Users } from '../auth/entities/user.entity';
import { PaginationDto } from 'src/common/dtos/pagination.dto';

@ApiTags('Clients')
@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Post()   
  @ApiResponse({ status: 201, description: 'Product was created', type: Clients  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related.' })
  createClient(
    @Body() createClientInput: CreateClientDTO,
    @GetUser() user: Users
  ) {
    return this.clientsService.create(createClientInput);
  }

  @Get()
  findAll( @Query() paginationDto:PaginationDto ) {
    return this.clientsService.findAll();
  }

  @Get(':term')
  findOne(@Param( 'term' ) term: string) {
    return this.clientsService.findOne(term);
  }

  @Put(':id')
  updateClient(
    @Param('id', ParseUUIDPipe ) id: string,
    @Body() updateClientInput: UpdateClientDTO,
    @GetUser() user: Users,) {
    console.log(updateClientInput);    
    return this.clientsService.update(updateClientInput.id, updateClientInput);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe ) id: string) {
    return this.clientsService.remove(id);
  }
}
