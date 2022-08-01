import { Column } from 'typeorm';
import { IsString } from 'class-validator';
import { GlobalEntity } from '../../../common/entity/entity';


export class CreatePaymentConditionDTO extends GlobalEntity{
  @IsString()
  @Column()
  payment_condition_description:string;

  @IsString()
  @Column()
  payment_condition_days:number;
}
