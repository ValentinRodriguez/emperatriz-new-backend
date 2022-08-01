import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put, Query } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { BranchOfficeService } from './branch-office.service';
import { BranchOfficeEntity } from './entities/branch-office.entity';
import { CreateBranchOfficeDTO } from './dto/create-branch-office.input';
import { UpdateBranchOfficeInput } from './dto/update-branch-office.input';
import { GetUser } from '../auth/decorators';
import { UserEntity } from '../auth/entities/user.entity';
import { PaginationDto } from 'src/common/dtos/pagination.dto';

@ApiTags('Branch-Office')
@Controller('branch-office')
export class BranchOfficeController {
  constructor(private readonly branchOfficeService: BranchOfficeService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'Product was created', type: BranchOfficeEntity  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related.' })
  createBranchOffice(@Body('createBranchOfficeInput') createBranchOfficeInput: CreateBranchOfficeDTO) {
    return this.branchOfficeService.create(createBranchOfficeInput);
  }

  @Get()
  findAll( @Query() paginationDto:PaginationDto ) {
    return this.branchOfficeService.findAll();
  }

  @Get(':term')
  findOne(@Param('id') id: string) {
    return this.branchOfficeService.findOne(id);
  }

  @Put(':id')
  updateBranchOffice(
    @Param('id', ParseUUIDPipe ) id: string, 
    @Body() updateBranchOfficeInput: UpdateBranchOfficeInput,
    @GetUser() user: UserEntity,
  ) {
    return this.branchOfficeService.update(id, updateBranchOfficeInput, user );
  }

  @Delete(':id')
  removeBranchOffice(@Param('id', ParseUUIDPipe ) id: string) {
    return this.branchOfficeService.remove(id);
  }
}
