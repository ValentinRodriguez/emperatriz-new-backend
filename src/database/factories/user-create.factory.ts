
import { define } from 'typeorm-seeding';
import { Users } from '../../endpoints/auth/entities/user.entity';

define(Users, () => {
  const users = new Users();
  return users;
});