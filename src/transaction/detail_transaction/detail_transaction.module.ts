import { Module } from '@nestjs/common';
import { DetailTransactionService } from './detail_transaction.service';
import { DetailTransactionController } from './detail_transaction.controller';

@Module({
  controllers: [DetailTransactionController],
  providers: [DetailTransactionService]
})
export class DetailTransactionModule {}
