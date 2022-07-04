import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Services } from 'src/services/model/services.model';
import { DetailTransaction } from 'src/transaction/detail_transaction/model/detail-transaction.model';
import { Transaction } from 'src/transaction/model/transaction.model';
import { Cars_Brand } from './car_brand/model/car_brand.model';
import { Cars_Model } from './car_model/model/car_model.model';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { Cars } from './model/cars.model';

@Injectable()
export class CarsService {

  constructor(
    @InjectModel(Cars)
    private carsModel: typeof Cars,
  ) {}

  create(createCarDto: CreateCarDto) {
    return 'This action adds a new car';
  }

  findAll() {
    return this.carsModel.findAll({
      include: [
        { model: Cars_Brand },
        { model: Cars_Model },
        { model: Transaction, include: [ { model: DetailTransaction , include: [ { model: Services } ]}] }
      ]
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} car`;
  }

  update(id: number, updateCarDto: UpdateCarDto) {
    return `This action updates a #${id} car`;
  }

  remove(id: number) {
    return `This action removes a #${id} car`;
  }
}
