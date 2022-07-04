import { AllowNull, AutoIncrement, Column, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table
export class Services extends Model {

    @PrimaryKey
    @AutoIncrement
    @Column
    id: Number;

    @AllowNull(false)
    @Column
    nombre: string;

    @Column
    descripcion: string;

    @AllowNull(false)
    @Column
    costo: number;

}   