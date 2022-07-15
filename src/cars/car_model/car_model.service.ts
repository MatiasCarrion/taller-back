import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Cars_Brand } from '../car_brand/model/car_brand.model';
import { CreateCarModelDto } from './dto/create-car_model.dto';
import { UpdateCarModelDto } from './dto/update-car_model.dto';
import { Cars_Model } from './model/car_model.model';

@Injectable()
export class CarModelService {

  constructor(
    @InjectModel(Cars_Model)
    private carsModelModel: typeof Cars_Model
  ) {}

  create(createCarModelDto: CreateCarModelDto) {
    return 'This action adds a new carModel';
  }

  findAll() {
    return this.carsModelModel.findAll({
      include: [
        { model: Cars_Brand}
      ]
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} carModel`;
  }

  update(id: number, updateCarModelDto: UpdateCarModelDto) {
    return `This action updates a #${id} carModel`;
  }

  remove(id: number) {
    return `This action removes a #${id} carModel`;
  }
}
