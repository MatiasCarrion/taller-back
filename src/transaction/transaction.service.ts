import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Services } from 'src/services/model/services.model';
import { DetailTransaction } from './detail_transaction/model/detail-transaction.model';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { Transaction } from './model/transaction.model';

@Injectable()
export class TransactionService {

constructor(
  @InjectModel(Transaction)
  private transactionModel: typeof Transaction
) {}

  create(createTransactionDto: CreateTransactionDto) {
    return 'This action adds a new transaction';
  }

  findAll() {
    return this.transactionModel.findAll({
      include: [
        { model: DetailTransaction , include: [ { model: Services} ]}
      ]
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} transaction`;
  }

  update(id: number, updateTransactionDto: UpdateTransactionDto) {
    return `This action updates a #${id} transaction`;
  }

  remove(id: number) {
    return `This action removes a #${id} transaction`;
  }
}
