import { AllowNull, AutoIncrement, Column, HasMany, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { Cars } from 'src/cars/model/cars.model';

@Table
export class Owner extends Model {

    @PrimaryKey
    @AutoIncrement
    @Column
    id: Number;

    @AllowNull(false)
    @Column
    nombre: string;

    @AllowNull(false)
    @Column
    apellido: string;

    @HasMany(() => Cars)
    cars: Cars;

}   