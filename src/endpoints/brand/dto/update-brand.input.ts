import { IsString } from 'class-validator';
import { CreateBrandInput } from './create-brand.input';

export class UpdateBrandInput extends CreateBrandInput {
  @IsString()
  id: string;
}
