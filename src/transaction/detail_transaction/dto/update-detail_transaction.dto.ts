import { PartialType } from '@nestjs/mapped-types';
import { CreateDetailTransactionDto } from './create-detail_transaction.dto';

export class UpdateDetailTransactionDto extends PartialType(CreateDetailTransactionDto) {}
