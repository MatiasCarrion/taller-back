import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { Services } from './model/services.model';

@Injectable()
export class ServicesService {

constructor(
  @InjectModel(Services)
  private serviceModel: typeof Services
) {}

  create(createServiceDto: CreateServiceDto) {
    return 'This action adds a new service';
  }

  findAll() {
    return this.serviceModel.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} service`;
  }

  update(id: number, updateServiceDto: UpdateServiceDto) {
    return `This action updates a #${id} service`;
  }

  remove(id: number) {
    return `This action removes a #${id} service`;
  }
}
