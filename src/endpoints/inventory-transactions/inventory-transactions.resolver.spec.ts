import { Test, TestingModule } from '@nestjs/testing';
import { InventoryTransactionsController } from './inventory-transactions.resolver';
import { InventoryTransactionsService } from './inventory-transactions.service';

describe('InventoryTransactionsResolver', () => {
  let resolver: InventoryTransactionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InventoryTransactionsController, InventoryTransactionsService],
    }).compile();

    resolver = module.get<InventoryTransactionsController>(InventoryTransactionsController);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
