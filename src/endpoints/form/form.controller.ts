import { FormService } from './form.service';
import { CreateFormDTO } from './dto/create-form.input';
import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Forms } from './entities/form.entity';
import { PaginationDto } from 'src/common/dtos/pagination.dto';

@ApiTags('Forms')
@Controller('forms')
export class FormController {
  constructor(private readonly formService: FormService) {}

  @Post()   
  @ApiResponse({ status: 201, description: 'Product was created', type: Forms  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related.' })
  createForm(@Body() createFormDTO: CreateFormDTO) {
    return this.formService.create(createFormDTO);
  }

  @Get(':form')   
  findByForm(@Param( 'form' ) form: string) {
    return this.formService.findByForm(form);
  }

  @Get()
  findAll( @Query() paginationDto:PaginationDto ) {
    return this.formService.findAll();
  }
}
