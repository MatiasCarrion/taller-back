import { Injectable } from '@nestjs/common';
import { CreateDetailTransactionDto } from './dto/create-detail_transaction.dto';
import { UpdateDetailTransactionDto } from './dto/update-detail_transaction.dto';

@Injectable()
export class DetailTransactionService {
  create(createDetailTransactionDto: CreateDetailTransactionDto) {
    return 'This action adds a new detailTransaction';
  }

  findAll() {
    return `This action returns all detailTransaction`;
  }

  findOne(id: number) {
    return `This action returns a #${id} detailTransaction`;
  }

  update(id: number, updateDetailTransactionDto: UpdateDetailTransactionDto) {
    return `This action updates a #${id} detailTransaction`;
  }

  remove(id: number) {
    return `This action removes a #${id} detailTransaction`;
  }
}
