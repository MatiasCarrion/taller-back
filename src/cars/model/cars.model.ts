import { AllowNull, AutoIncrement, BelongsTo, Column, ForeignKey, HasOne, Model, PrimaryKey, Table, Unique } from 'sequelize-typescript';
import { Owner } from 'src/owners/model/owner.model';
import { Cars_Brand } from '../car_brand/model/car_brand.model';
import { Cars_Model } from '../car_model/model/car_model.model';

@Table
export class Cars extends Model {

    @PrimaryKey
    @AutoIncrement
    @Column
    id: Number;

    @AllowNull(false)
    @Unique(true)
    @Column
    patente: string;

    @Column
    año: Number;

    @ForeignKey(() => Cars_Brand)
    @Column
    marca_id: Number;

    @BelongsTo(() => Cars_Brand)
    marca: Cars_Brand;

    @ForeignKey(() => Cars_Model)
    @Column
    modelo_id: Number;

    @BelongsTo(() => Cars_Model)
    modelo: Cars_Model;

    @ForeignKey(() => Owner)
    @Column
    propietario_id: Number;

    @BelongsTo(() => Owner)
    propietario: Owner;
}   