
import { PaymentConditions } from '../../endpoints/payment-condition/entities/payment-condition.entity';
import { define } from 'typeorm-seeding';

define(PaymentConditions, () => {
  const columns = new PaymentConditions();
  return columns;
});