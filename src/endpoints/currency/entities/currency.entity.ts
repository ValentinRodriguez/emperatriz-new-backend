
import { Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CreateCurrencyDTO } from '../dto/create-currency.input';

@Entity({ name: 'currencies' })
export class Currencies extends CreateCurrencyDTO {  

  @PrimaryGeneratedColumn('uuid')
  id: string;

}
