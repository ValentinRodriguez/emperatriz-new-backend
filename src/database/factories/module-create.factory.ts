
import { define } from 'typeorm-seeding';
import { ModuleEntity } from '../../endpoints/modules/entities/module.entity';

define(ModuleEntity, () => {
  const modules = new ModuleEntity();
  return modules;
});