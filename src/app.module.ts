import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarsModule } from './cars/cars.module';
import { Cars } from './cars/model/cars.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Matiasepam2022',
      database: 'taller',
      autoLoadModels: true,
      sync: {force: true},
      models: [Cars],
    }),
    CarsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
