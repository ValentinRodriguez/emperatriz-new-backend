import { Test, TestingModule } from '@nestjs/testing';
import { PaymentConditionService } from './payment-condition.service';

describe('PaymentConditionService', () => {
  let service: PaymentConditionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaymentConditionService],
    }).compile();

    service = module.get<PaymentConditionService>(PaymentConditionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
