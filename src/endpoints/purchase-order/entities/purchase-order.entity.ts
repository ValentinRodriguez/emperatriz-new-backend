import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CreatePurchaseOrderDTO } from '../dto/create-purchase-order.input';

@Entity()
export class PurchaseOrderEntity extends CreatePurchaseOrderDTO {
  @Column()
  @PrimaryGeneratedColumn()
  id: string;
}
