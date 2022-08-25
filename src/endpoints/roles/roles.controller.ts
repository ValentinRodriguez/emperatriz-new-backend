import { Body, Controller, Get, Post } from '@nestjs/common';
import { GetUser } from '../auth/decorators';
import { Users } from '../auth/entities/user.entity';
import { CreateRoleDto } from './dto/create-role.dto';
import { RolesService } from './roles.service';

@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Post()
  create(@Body() createRoleDto: CreateRoleDto, @GetUser() user:Users) {
    console.log(createRoleDto);    
    return this.rolesService.createRegister(createRoleDto, user);
  }

  @Get()
  findAll() {
    return this.rolesService.findAllRegisters();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.rolesService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateRoleDto: UpdateRoleDto) {
  //   return this.rolesService.update(+id, updateRoleDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.rolesService.remove(+id);
  // }
}
