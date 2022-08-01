
import { Users } from '../../endpoints/auth/entities/user.entity';
import { define } from 'typeorm-seeding';

define(Users, () => {
  const columns = new Users();
  return columns;
});