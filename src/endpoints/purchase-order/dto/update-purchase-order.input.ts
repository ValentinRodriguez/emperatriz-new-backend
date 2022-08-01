import { IsString } from 'class-validator';
import { CreatePurchaseOrderDTO } from './create-purchase-order.input';

export class UpdatePurchaseOrderInput extends CreatePurchaseOrderDTO {
  @IsString()
  id: string;
}
