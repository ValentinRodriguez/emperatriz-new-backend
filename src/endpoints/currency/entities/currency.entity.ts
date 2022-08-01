
import { Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CreateCurrencyDTO } from '../dto/create-currency.input';

@Entity()
export class CurrencyEntity extends CreateCurrencyDTO {  

  @PrimaryGeneratedColumn()
  id: string;

}
