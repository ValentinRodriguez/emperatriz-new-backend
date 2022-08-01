import { IsString } from 'class-validator';
import { CreateProviderDTO } from './create-provider.input';

export class UpdateProviderInput extends CreateProviderDTO{
  @IsString()
  id: string;
}
