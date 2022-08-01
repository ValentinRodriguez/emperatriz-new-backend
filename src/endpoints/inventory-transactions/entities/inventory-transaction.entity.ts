import { IsString } from 'class-validator';
import { Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CreateInventoryTransactionDTO } from '../dto/create-inventory-transaction.input';


@Entity()
export class InventoryTransactionEntity extends CreateInventoryTransactionDTO{
  @IsString()
  @PrimaryGeneratedColumn()
  id: string;
}
