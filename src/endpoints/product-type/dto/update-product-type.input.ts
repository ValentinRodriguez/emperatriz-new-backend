import { IsString } from 'class-validator';
import { ProductTypeEntity } from '../entities/product-type.entity';

export class UpdateProductTypeDTO extends ProductTypeEntity{
  @IsString()
  id: string;
}
