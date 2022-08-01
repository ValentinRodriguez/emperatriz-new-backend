import { Forms } from '../../endpoints/form/entities/form.entity';
import { define } from 'typeorm-seeding';

define(Forms, () => {
  const inputForm = new Forms();
  return inputForm;
});