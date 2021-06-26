class Auto extends Vehiculo{

    cantidadPuertas:number;

    constructor(cantidadPuertas:number, id: number, marca: string, modelo: string, precio: number) {

        super(id, marca, modelo, precio);
        this.cantidadPuertas = cantidadPuertas;
    }
}