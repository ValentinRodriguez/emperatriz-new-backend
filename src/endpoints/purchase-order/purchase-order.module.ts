import { Module } from '@nestjs/common';
import { PurchaseOrderService } from './purchase-order.service';
import { PurchaseOrderController } from './purchase-order.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PurchaseOrderEntity } from './entities/purchase-order.entity';

@Module({
  controllers: [PurchaseOrderController],
  imports: [
    TypeOrmModule.forFeature([PurchaseOrderEntity])
  ],
  providers: [PurchaseOrderService]
})
export class PurchaseOrderModule {}
