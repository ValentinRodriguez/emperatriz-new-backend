import { IsString } from 'class-validator';
import { Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CreatePaymentConditionDTO } from '../dto/create-payment-condition.input';


@Entity()
export class PaymentConditionEntity extends CreatePaymentConditionDTO {
  @IsString()
  @PrimaryGeneratedColumn()
  id: string;
}
