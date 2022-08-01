import { FormEntity } from '../../endpoints/form/entities/form.entity';
import { define } from 'typeorm-seeding';

define(FormEntity, () => {
  const inputForm = new FormEntity();
  return inputForm;
});