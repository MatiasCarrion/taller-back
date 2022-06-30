import { AllowNull, AutoIncrement, BelongsTo, Column, ForeignKey, HasMany, HasOne, Model, PrimaryKey, Table, Unique } from 'sequelize-typescript';
import { Cars_Model } from 'src/cars/car_model/model/car_model.model';
import { Cars } from 'src/cars/model/cars.model';

@Table
export class Cars_Brand extends Model {

    @PrimaryKey
    @AutoIncrement
    @Column
    id: Number;

    @AllowNull(false)
    @Unique(true)
    @Column
    nombre: string;

    @HasMany(() => Cars)
    cars: Cars;

    @HasMany(() => Cars_Model)
    models: Cars_Model;
}