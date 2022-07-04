import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DetailTransactionService } from './detail_transaction.service';
import { CreateDetailTransactionDto } from './dto/create-detail_transaction.dto';
import { UpdateDetailTransactionDto } from './dto/update-detail_transaction.dto';

@Controller('detail-transaction')
export class DetailTransactionController {
  constructor(private readonly detailTransactionService: DetailTransactionService) {}

  @Post()
  create(@Body() createDetailTransactionDto: CreateDetailTransactionDto) {
    return this.detailTransactionService.create(createDetailTransactionDto);
  }

  @Get()
  findAll() {
    return this.detailTransactionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.detailTransactionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDetailTransactionDto: UpdateDetailTransactionDto) {
    return this.detailTransactionService.update(+id, updateDetailTransactionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.detailTransactionService.remove(+id);
  }
}
