import { Module } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { TransactionController } from './transaction.controller';
import { DetailTransactionModule } from './detail_transaction/detail_transaction.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Transaction } from './model/transaction.model';

@Module({
  controllers: [TransactionController],
  providers: [TransactionService],
  imports: [SequelizeModule.forFeature([Transaction]), DetailTransactionModule]
})
export class TransactionModule {}
