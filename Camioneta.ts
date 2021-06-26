class Camioneta extends Vehiculo{
    cuatroXcuatro:number;

    constructor(cuatroXcuatro:number, id: number, marca: string, modelo: string, precio: number) {

        super(id, marca, modelo, precio);
        this.cuatroXcuatro = cuatroXcuatro;
    }
}