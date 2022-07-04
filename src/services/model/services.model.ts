import { AllowNull, AutoIncrement, Column, HasMany, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { DetailTransaction } from 'src/transaction/detail_transaction/model/detail-transaction.model';

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

    @HasMany(() => DetailTransaction)
    details_transactions : DetailTransaction

}   