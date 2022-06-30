import { AllowNull, AutoIncrement, BelongsTo, Column, ForeignKey, HasMany, Model, PrimaryKey, Table, Unique } from 'sequelize-typescript';
import { Cars_Brand } from 'src/cars/car_brand/model/car_brand.model';
import { Cars } from 'src/cars/model/cars.model';

@Table
export class Cars_Model extends Model {

    @PrimaryKey
    @AutoIncrement
    @Column
    id: Number;

    @AllowNull(false)
    @Unique(true)
    @Column
    nombre: string;

    @ForeignKey(() => Cars_Brand)
    @Column
    marca_id: Number;

    @BelongsTo(() => Cars_Brand)
    marca: Cars_Brand;

    @HasMany(() => Cars)
    cars: Cars;
}