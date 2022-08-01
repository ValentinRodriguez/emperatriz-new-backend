import { IsString } from 'class-validator';
import { CreateInventoryTransactionDTO } from './create-inventory-transaction.input';

export class UpdateInventoryTransactionDTO extends CreateInventoryTransactionDTO {
  @IsString()
  id: string;
}
