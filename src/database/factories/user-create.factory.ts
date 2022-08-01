
import { UserEntity } from '../../endpoints/auth/entities/user.entity';
import { define } from 'typeorm-seeding';

define(UserEntity, () => {
  const columns = new UserEntity();
  return columns;
});