
import { define } from 'typeorm-seeding';
import { RoleEntity } from '../../endpoints/roles/entities/role.entity';

define(RoleEntity, () => {
  const roles = new RoleEntity();
  return roles;
});