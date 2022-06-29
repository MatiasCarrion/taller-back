import { Module } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CarsController } from './cars.controller';
import { Cars } from './model/cars.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([Cars])],
  controllers: [CarsController],
  providers: [CarsService]
})
export class CarsModule {}
