import { Module } from '@nestjs/common';
import { OwnersService } from './owners.service';
import { OwnersController } from './owners.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Owner } from './model/owner.model';

@Module({
  imports: [SequelizeModule.forFeature([Owner])],
  controllers: [OwnersController],
  providers: [OwnersService]
})
export class OwnersModule {}
