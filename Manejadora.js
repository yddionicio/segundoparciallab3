"use strict";
var Manejadora = /** @class */ (function () {
    function Manejadora() {
    }
    Manejadora.AgregarVehiculos = function (id, marca, modelo, precio) {
        var vehiculos = localStorage.getItem("vehiculos");
        var arrayVehiculos = new Array();
        if (vehiculos) {
            arrayVehiculos = JSON.parse(vehiculos);
        }
        var vehiculo = new Vehiculo(id, marca, modelo, precio);
        arrayVehiculos.push(vehiculo);
        localStorage.setItem("vehiculos", JSON.stringify(arrayVehiculos));
    };
    Manejadora.MostrarVehiculos = function () {
        var vehiculos = localStorage.getItem("vehiculos");
        var arrayVehiculos = new Array();
        console.log(vehiculos);
        if (vehiculos) {
            arrayVehiculos = JSON.parse(vehiculos);
            var filtro_1 = document.getElementById("selectFiltro");
            arrayVehiculos = arrayVehiculos.filter(function (datos) { return datos.tipo == filtro_1.value || filtro_1.value == "Todos"; });
        }
        var _loop_1 = function (i) {
            var vehiculoObj = arrayVehiculos[i];
            //defino los elementos 
            var tbody = document.getElementById("tbody");
            var trow = document.createElement("tr");
            var id = document.createElement("td");
            var marca = document.createElement("td");
            var modelo = document.createElement("td");
            var precio = document.createElement("td");
            var Eliminar = document.createElement("td");
            var Modificar = document.createElement("td");
            var btnEliminar = document.createElement("button");
            var btnModificar = document.createElement("button");
            //otorgo valores
            id.appendChild(document.createTextNode(vehiculoObj.id));
            marca.appendChild(document.createTextNode(vehiculoObj.marca));
            modelo.appendChild(document.createTextNode(vehiculoObj.modelo));
            precio.appendChild(document.createTextNode(vehiculoObj.precio));
            btnEliminar.appendChild(document.createTextNode("Eliminar"));
            btnModificar.appendChild(document.createTextNode("Modificar"));
            btnEliminar === null || btnEliminar === void 0 ? void 0 : btnEliminar.addEventListener("click", function () {
                Manejadora.EliminarVehiculos(i);
            });
            Eliminar.appendChild(btnEliminar);
            trow.appendChild(id);
            trow.appendChild(marca);
            trow.appendChild(modelo);
            trow.appendChild(precio);
            trow.appendChild(Eliminar);
            trow.appendChild(Modificar);
            tbody === null || tbody === void 0 ? void 0 : tbody.appendChild(trow);
        };
        for (var i = 0; i < arrayVehiculos.length; i++) {
            _loop_1(i);
        }
    };
    Manejadora.EliminarVehiculos = function (i) {
        var Vehiculo = localStorage.getItem("vehiculos");
        if (Vehiculo) {
            var arrayVehiculos = JSON.parse(Vehiculo);
            arrayVehiculos.splice(i, 1);
            console.log(arrayVehiculos);
            localStorage.setItem("vehiculos", JSON.stringify(arrayVehiculos));
        }
        var tabla = document.getElementById("tbody");
        while (tabla === null || tabla === void 0 ? void 0 : tabla.hasChildNodes()) {
            tabla.removeChild(tabla.lastChild);
        }
        this.MostrarVehiculos();
    };
    return Manejadora;
}());
