import { Module } from '@nestjs/common';
import { ServicesService } from './services.service';
import { ServicesController } from './services.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Services } from './model/services.model';

@Module({
  imports: [SequelizeModule.forFeature([Services])],
  controllers: [ServicesController],
  providers: [ServicesService]
})
export class ServicesModule {}
