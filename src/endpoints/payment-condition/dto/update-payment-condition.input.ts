import { CreatePaymentConditionDTO } from './create-payment-condition.input';
import { IsString } from 'class-validator';


export class UpdatePaymentConditionInput extends CreatePaymentConditionDTO {
  @IsString()
  id: string;
}
