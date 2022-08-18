import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Crud } from 'src/common/crud';
import { Repository } from 'typeorm';
import { ModuleEntity } from './entities/module.entity';

@Injectable()
export class ModulesService extends Crud{
  constructor(@InjectRepository(ModuleEntity) private moduleRepository: Repository<ModuleEntity>) {
    super(moduleRepository);
  }
}
