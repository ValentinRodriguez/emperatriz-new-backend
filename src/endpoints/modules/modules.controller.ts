import { Controller, Get, Param } from '@nestjs/common';
import { ModulesService } from './modules.service';

@Controller('modules')
export class ModulesController {
  constructor(private readonly modulesService: ModulesService) {}

  @Get()
  findAll() {
    return this.modulesService.findAllRegisters();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.modulesService.findRegisters(id);
  }
}
