import { Test, TestingModule } from '@nestjs/testing';
import { CurrencyController } from './currency.controller';
import { CurrencyService } from './currency.service';

describe('CurrencyResolver', () => {
  let resolver: CurrencyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CurrencyController, CurrencyService],
    }).compile();

    resolver = module.get<CurrencyController>(CurrencyController);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
