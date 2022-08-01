import { IsString } from 'class-validator';
import { Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CreateInventoryTransactionDTO } from '../dto/create-inventory-transaction.input';


@Entity({ name: 'inventory_transactions' })
export class InventoryTransactions extends CreateInventoryTransactionDTO{
  @IsString()
  @PrimaryGeneratedColumn()
  id: string;
}
