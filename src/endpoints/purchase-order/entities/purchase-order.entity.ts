import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CreatePurchaseOrderDTO } from '../dto/create-purchase-order.input';

@Entity({ name: 'purchase_orders' })
export class PurchaseOrders extends CreatePurchaseOrderDTO {
  @Column()
  @PrimaryGeneratedColumn('uuid')
  id: string;
}
