import { Module } from '@nestjs/common';
import { CarBrandService } from './car_brand.service';
import { CarBrandController } from './car_brand.controller';

@Module({
  controllers: [CarBrandController],
  providers: [CarBrandService]
})
export class CarBrandModule {}
