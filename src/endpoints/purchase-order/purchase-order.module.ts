import { Module } from '@nestjs/common';
import { PurchaseOrderService } from './purchase-order.service';
import { PurchaseOrderController } from './purchase-order.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PurchaseOrders } from './entities/purchase-order.entity';

@Module({
  controllers: [PurchaseOrderController],
  imports: [
    TypeOrmModule.forFeature([PurchaseOrders])
  ],
  providers: [PurchaseOrderService]
})
export class PurchaseOrderModule {}
