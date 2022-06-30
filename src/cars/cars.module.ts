import { Module } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CarsController } from './cars.controller';
import { Cars } from './model/cars.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { CarBrandModule } from './car_brand/car_brand.module';
import { CarModelModule } from './car_model/car_model.module';

@Module({
  imports: [SequelizeModule.forFeature([Cars]), CarBrandModule, CarModelModule],
  controllers: [CarsController],
  providers: [CarsService]
})
export class CarsModule {}
