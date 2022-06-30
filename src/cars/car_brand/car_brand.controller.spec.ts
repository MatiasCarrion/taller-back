import { Test, TestingModule } from '@nestjs/testing';
import { CarBrandController } from './car_brand.controller';
import { CarBrandService } from './car_brand.service';

describe('CarBrandController', () => {
  let controller: CarBrandController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarBrandController],
      providers: [CarBrandService],
    }).compile();

    controller = module.get<CarBrandController>(CarBrandController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
