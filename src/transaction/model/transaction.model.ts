import { AllowNull, AutoIncrement, BelongsTo, Column, ForeignKey, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { Cars } from 'src/cars/model/cars.model';

@Table
export class Transaction extends Model {

    @PrimaryKey
    @AutoIncrement
    @Column
    id: Number;

    @AllowNull(false)
    @Column
    fecha: Date;

    @AllowNull(false)
    @Column
    observacion: string;

    @ForeignKey(() => Cars)
    @Column
    auto_id: Number;

    @BelongsTo(() => Cars)
    auto: Cars;


}   