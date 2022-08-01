import { Test, TestingModule } from '@nestjs/testing';
import { AccountCatalogueService } from './account-catalogue.service';

describe('AccountCatalogueService', () => {
  let service: AccountCatalogueService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccountCatalogueService],
    }).compile();

    service = module.get<AccountCatalogueService>(AccountCatalogueService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
