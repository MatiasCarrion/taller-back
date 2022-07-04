import { AllowNull, AutoIncrement, BelongsTo, Column, Default, ForeignKey, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { Services } from 'src/services/model/services.model';
import { Transaction } from 'src/transaction/model/transaction.model';

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

    @ForeignKey(() => Transaction)
    @Column
    transaction_id: Number;

    @BelongsTo(() => Transaction)
    transaction: Transaction;

    @ForeignKey(() => Services)
    @Column
    service_id: Number;

    @BelongsTo(() => Services)
    services: Services;


}   