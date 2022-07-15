import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Cars_Model } from '../car_model/model/car_model.model';
import { CreateCarBrandDto } from './dto/create-car_brand.dto';
import { UpdateCarBrandDto } from './dto/update-car_brand.dto';
import { Cars_Brand } from './model/car_brand.model';

@Injectable()
export class CarBrandService {

  constructor(
    @InjectModel(Cars_Brand)
    private carsBrandModel: typeof Cars_Brand
  ) {}

  create(createCarBrandDto: CreateCarBrandDto) {
    return 'This action adds a new carBrand';
  }

  findAll() {
    return this.carsBrandModel.findAll({
      include: [
        {model: Cars_Model}
      ]
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} carBrand`;
  }

  update(id: number, updateCarBrandDto: UpdateCarBrandDto) {
    return `This action updates a #${id} carBrand`;
  }

  remove(id: number) {
    return `This action removes a #${id} carBrand`;
  }
}
