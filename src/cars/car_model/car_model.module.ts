import { Module } from '@nestjs/common';
import { CarModelService } from './car_model.service';
import { CarModelController } from './car_model.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Cars_Model } from './model/car_model.model';
import { Cars_Brand } from '../car_brand/model/car_brand.model';
import { Cars } from '../model/cars.model';

@Module({
  imports: [SequelizeModule.forFeature([Cars_Model]), Cars_Brand, Cars],
  controllers: [CarModelController],
  providers: [CarModelService]
})
export class CarModelModule {}
