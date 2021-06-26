class Manejadora {


    public static AgregarVehiculos(id:number, marca:string, modelo:string, precio:number) {

        let vehiculos = localStorage.getItem("vehiculos");
        let arrayVehiculos = new Array();
        if (vehiculos) {
            arrayVehiculos = JSON.parse(vehiculos);
        }
        let vehiculo: Vehiculo = new Vehiculo(id, marca, modelo, precio);
        arrayVehiculos.push(vehiculo);
        localStorage.setItem("vehiculos", JSON.stringify(arrayVehiculos));
    }

    public static MostrarVehiculos() {

        let vehiculos = localStorage.getItem("vehiculos");
        let arrayVehiculos = new Array();
        console.log(vehiculos);
        if (vehiculos) {
            arrayVehiculos = JSON.parse(vehiculos);

            let filtro = document.getElementById("selectFiltro");
            arrayVehiculos = arrayVehiculos.filter((datos: any)=>datos.tipo == (filtro as HTMLSelectElement).value || (filtro as HTMLSelectElement).value == "Todos"); 
            
        }

        for (let i = 0; i < arrayVehiculos.length; i++) {
            let vehiculoObj = arrayVehiculos[i];

            //defino los elementos 
            let tbody = document.getElementById("tbody");
            let trow = document.createElement("tr");
            let id = document.createElement("td");
            let marca = document.createElement("td");
            let modelo = document.createElement("td");
            let precio = document.createElement("td");
            let Eliminar = document.createElement("td");
            let Modificar = document.createElement("td");
            let btnEliminar = document.createElement("button");
            let btnModificar = document.createElement("button");

            //otorgo valores
            id.appendChild(document.createTextNode(vehiculoObj.id));
            marca.appendChild(document.createTextNode(vehiculoObj.marca));
            modelo.appendChild(document.createTextNode(vehiculoObj.modelo));
            precio.appendChild(document.createTextNode(vehiculoObj.precio));

            btnEliminar.appendChild(document.createTextNode("Eliminar"));
            btnModificar.appendChild(document.createTextNode("Modificar"));

            btnEliminar?.addEventListener("click", () => {
                Manejadora.EliminarVehiculos(i);
            });

            Eliminar.appendChild(btnEliminar);

            trow.appendChild(id);
            trow.appendChild(marca);
            trow.appendChild(modelo);
            trow.appendChild(precio);
            trow.appendChild(Eliminar);
            trow.appendChild(Modificar);

            tbody?.appendChild(trow);
        }
    }

    public static EliminarVehiculos(i: number) {

        let Vehiculo = localStorage.getItem("vehiculos");
        if (Vehiculo) {
            let arrayVehiculos = JSON.parse(Vehiculo);
            arrayVehiculos.splice(i, 1);
            console.log(arrayVehiculos);
            localStorage.setItem("vehiculos", JSON.stringify(arrayVehiculos));
        }

        let tabla = document.getElementById("tbody");
        while (tabla?.hasChildNodes()) {
            tabla.removeChild((tabla.lastChild as Node));
        }
        this.MostrarVehiculos();
    }

}