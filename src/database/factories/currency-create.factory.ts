

// import { randFullName } from '@ngneat/falso';
import { Currencies } from '../../endpoints/currency/entities/currency.entity';
import { define } from 'typeorm-seeding';

define(Currencies, () => {
  const inputForm = new Currencies();
  return inputForm;
});