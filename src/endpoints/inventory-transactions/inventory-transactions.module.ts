import { Module } from '@nestjs/common';
import { InventoryTransactionsService } from './inventory-transactions.service';
import { InventoryTransactionsController } from './inventory-transactions.resolver';
import { InventoryTransactionEntity } from './entities/inventory-transaction.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [InventoryTransactionsController],
  imports: [
    TypeOrmModule.forFeature([InventoryTransactionEntity])
  ],
  providers: [InventoryTransactionsService]
})
export class InventoryTransactionsModule {}
