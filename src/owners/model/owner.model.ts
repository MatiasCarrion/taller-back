import { AllowNull, AutoIncrement, BelongsTo, Column, ForeignKey, HasOne, Model, PrimaryKey, Table, Unique } from 'sequelize-typescript';

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

}   