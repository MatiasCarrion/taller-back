import { Test, TestingModule } from '@nestjs/testing';
import { DetailTransactionController } from './detail_transaction.controller';
import { DetailTransactionService } from './detail_transaction.service';

describe('DetailTransactionController', () => {
  let controller: DetailTransactionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DetailTransactionController],
      providers: [DetailTransactionService],
    }).compile();

    controller = module.get<DetailTransactionController>(DetailTransactionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
