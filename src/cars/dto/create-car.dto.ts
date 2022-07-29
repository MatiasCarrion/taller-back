import { IsNotEmpty, IsString, Length, Min, Max } from "class-validator";

export class CreateCarDto {
    @IsNotEmpty()
    // @Length(6,7)
    patente: string;

    @IsNotEmpty()
    @Min(1950)
    @Max(new Date().getFullYear())
    año: number;

    @IsNotEmpty()
    marca_id: number;

    @IsNotEmpty()
    modelo_id: number;

    @IsNotEmpty()
    propietario_id: number;
}
