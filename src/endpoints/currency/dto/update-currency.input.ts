import { IsString } from 'class-validator';
import { CreateCurrencyDTO } from './create-currency.input';

export class UpdateCurrencyInput extends CreateCurrencyDTO {
  @IsString()
  id: string;
}
