import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put, Query } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { PaginationDto } from '../../common/dtos/pagination.dto';
import { GetUser } from '../auth/decorators';
import { UserEntity } from '../auth/entities/user.entity';
import { EmployeeCreateDTO } from './dto/create-employee.dto';
import { EmployeeUpdateDTO } from './dto/update-employee.dto';
import { EmployeeService } from './employee.service';
import { EmployeeEntity } from './entities/employee.entity';

@ApiTags('Employee')
@Controller('employee')
export class EmployeeController {

    constructor(private employeeService: EmployeeService) {}

    @Post()   
    @ApiResponse({ status: 201, description: 'Product was created', type: EmployeeEntity  })
    @ApiResponse({ status: 400, description: 'Bad request' })
    @ApiResponse({ status: 403, description: 'Forbidden. Token related.' })    
    create(
        @Body() employee: EmployeeCreateDTO,
        @GetUser() user: UserEntity
    ){
        return this.employeeService.create(employee);
    }

    @Get()
    findAll( @Query() paginationDto:PaginationDto ) {   
        return this.employeeService.findAll();
    }

    @Get(':term')
    findOne(@Param( 'term' ) term: string) {
        return this.employeeService.findOne(term)
    }

    @Put(':id')
    update(
        @Param('id', ParseUUIDPipe ) id: string, 
        @GetUser() user: UserEntity,
        @Body() updateEmployee: EmployeeUpdateDTO,
    ){      
        return this.employeeService.update(id, updateEmployee);
    }

    @Delete(':id')
    remove(@Param('id', ParseUUIDPipe ) id: string) {
    //   return this.employeeService.re(id);
    }
    
}
