import { Column } from 'typeorm';
import { IsString } from 'class-validator';
import { GlobalEntity } from '../../../common/entity/entity';

export class CreateCurrencyDTO extends GlobalEntity{
  @IsString()
  @Column()
  currency: string;

  @IsString()
  @Column()
  currency_symbol: string;

  @IsString()
  @Column()
  currency_description: string;
}
