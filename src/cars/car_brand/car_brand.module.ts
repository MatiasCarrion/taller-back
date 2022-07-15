import { Module } from '@nestjs/common';
import { CarBrandService } from './car_brand.service';
import { CarBrandController } from './car_brand.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Cars_Brand } from './model/car_brand.model';
import { Cars_Model } from '../car_model/model/car_model.model';
import { Cars } from '../model/cars.model';

@Module({
  imports: [SequelizeModule.forFeature([Cars_Brand]), Cars_Model, Cars],
  controllers: [CarBrandController],
  providers: [CarBrandService]
})
export class CarBrandModule {}
