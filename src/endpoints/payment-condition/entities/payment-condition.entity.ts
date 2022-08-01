import { IsString } from 'class-validator';
import { Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CreatePaymentConditionDTO } from '../dto/create-payment-condition.input';


@Entity({ name: 'payment_conditions' })
export class PaymentConditions extends CreatePaymentConditionDTO {
  @IsString()
  @PrimaryGeneratedColumn()
  id: string;
}
