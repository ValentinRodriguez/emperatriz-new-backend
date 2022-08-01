import { Test, TestingModule } from '@nestjs/testing';
import { EnterpriseController } from './enterprise.Controller';
import { EnterpriseService } from './enterprise.service';

describe('EnterpriseResolver', () => {
  let resolver: EnterpriseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EnterpriseController, EnterpriseService],
    }).compile();

    resolver = module.get<EnterpriseController>(EnterpriseController);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
