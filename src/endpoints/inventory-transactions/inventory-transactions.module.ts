import { Module } from '@nestjs/common';
import { InventoryTransactionsService } from './inventory-transactions.service';
import { InventoryTransactionsController } from './inventory-transactions.resolver';
import { InventoryTransactions } from './entities/inventory-transaction.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [InventoryTransactionsController],
  imports: [
    TypeOrmModule.forFeature([InventoryTransactions])
  ],
  providers: [InventoryTransactionsService]
})
export class InventoryTransactionsModule {}
