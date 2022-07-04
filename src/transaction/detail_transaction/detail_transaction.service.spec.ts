import { Test, TestingModule } from '@nestjs/testing';
import { DetailTransactionService } from './detail_transaction.service';

describe('DetailTransactionService', () => {
  let service: DetailTransactionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DetailTransactionService],
    }).compile();

    service = module.get<DetailTransactionService>(DetailTransactionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
