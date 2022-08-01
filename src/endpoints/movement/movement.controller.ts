import { MovementService } from './movement.service';
import { Movements } from './entities/movement.entity';
import { CreateMovementDTO } from './dto/create-movement.input';
import { UpdateMovementInput } from './dto/update-movement.input';
import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put, Query } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { GetUser } from '../auth/decorators';
import { Users } from '../auth/entities/user.entity';
import { PaginationDto } from 'src/common/dtos/pagination.dto';

@ApiTags('Products')
@Controller('products')
export class MovementController {
  constructor(private readonly movementService: MovementService) {}

  @Post()   
  @ApiResponse({ status: 201, description: 'Product was created', type: Movements  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related.' })
  createMovement(
    @Body() createMovementInput: CreateMovementDTO,
    @GetUser() user: Users
  ) {
    return this.movementService.create(createMovementInput);
  }

  @Get()
  findAll( @Query() paginationDto:PaginationDto ) {
    return this.movementService.findAll();
  }

  @Get(':term')
  findOne(@Param( 'term' ) term: string) {
    return this.movementService.findOne(term);
  }

  @Put(':id')
  update(
    @Param('id', ParseUUIDPipe ) id: string, 
    @GetUser() user: Users,
    @Body('updateMovementInput') updateMovementInput: UpdateMovementInput) {
    return this.movementService.update(updateMovementInput.id, updateMovementInput);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe ) id: string) {
    return this.movementService.remove(id);
  }
}
