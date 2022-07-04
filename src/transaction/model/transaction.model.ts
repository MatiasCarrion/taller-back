import { AllowNull, AutoIncrement, BelongsTo, Column, ForeignKey, HasMany, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { Cars } from 'src/cars/model/cars.model';
import { DetailTransaction } from '../detail_transaction/model/detail-transaction.model';

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

    @HasMany(() => DetailTransaction)
    details_transactions: DetailTransaction
}   