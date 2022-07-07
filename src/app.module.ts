import { All, Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarsModule } from './cars/cars.module';
import { Cars_Brand } from './cars/car_brand/model/car_brand.model';
import { Cars_Model } from './cars/car_model/model/car_model.model';
import { Cars } from './cars/model/cars.model';
import { Owner } from './owners/model/owner.model';
import { OwnersModule } from './owners/owners.module';
import { Services } from './services/model/services.model';
import { ServicesModule } from './services/services.module';
import { DetailTransaction } from './transaction/detail_transaction/model/detail-transaction.model';
import { Transaction } from './transaction/model/transaction.model';
import { TransactionModule } from './transaction/transaction.module';

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
      // synchronize: true,
      sync: { force: true },
      models: [Cars, Cars_Brand, Cars_Model, Owner, Services, Transaction, DetailTransaction],
    }),
    CarsModule,
    OwnersModule,
    ServicesModule,
    TransactionModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
