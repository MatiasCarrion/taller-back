import { AllowNull, AutoIncrement, Column, Default, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table
export class DetailTransaction extends Model {

    @PrimaryKey
    @AutoIncrement
    @Column
    id: Number;

    @AllowNull(false)
    @Default(1)
    @Column
    cantidad: number;

    @AllowNull(false)
    @Default(0)
    @Column
    costo_unitario: number;

    @AllowNull(true)
    @Column
    observacion: string;

}   