import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Crud } from 'src/common/crud';
import { Repository } from 'typeorm';
import { RoleEntity } from './entities/role.entity';

@Injectable()
export class RolesService extends Crud{

  constructor(@InjectRepository(RoleEntity) private roleRepository: Repository<RoleEntity>) {
    super(roleRepository);
  }

  // create(createRoleDto: CreateRoleDto) {
  //   return 'This action adds a new role';
  // }

  // findAll() {
  //   return `This action returns all roles`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} role`;
  // }

  // update(id: number, updateRoleDto: UpdateRoleDto) {
  //   return `This action updates a #${id} role`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} role`;
  // }
}
