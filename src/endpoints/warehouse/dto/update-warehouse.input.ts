import { IsString } from 'class-validator';
import { CreateWarehouseDTO } from './create-warehouse.input';

export class UpdateWarehouseInput extends CreateWarehouseDTO {
  @IsString()
  id: string;
}
