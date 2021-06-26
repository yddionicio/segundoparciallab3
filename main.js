"use strict";
window.addEventListener("load", function () {
    var _a, _b;
    (_a = document.getElementById("Agregar")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", Guardar);
    Manejadora.MostrarVehiculos();
    var boton = document.getElementById("idAlta");
    boton === null || boton === void 0 ? void 0 : boton.addEventListener("click", form);
    (_b = document.getElementById("selectFiltro")) === null || _b === void 0 ? void 0 : _b.addEventListener("change", recargar);
});
function recargar() {
    var tabla = document.getElementById("tbody");
    while (tabla === null || tabla === void 0 ? void 0 : tabla.hasChildNodes()) {
        tabla.removeChild(tabla.lastChild);
    }
    Manejadora.MostrarVehiculos();
}
function form() {
    var form = document.getElementById("form");
    if (form) {
        form.className = "visible";
        var alta = document.getElementById("Cerrar");
        if (alta) {
            alta.onclick = function (e) {
                e.preventDefault();
                if (form) {
                    form.className = "invisible";
                }
            };
        }
    }
}
function Guardar() {
    Manejadora.AgregarVehiculos(Number(document.getElementById("Id").value), document.getElementById("idMarca").value, document.getElementById("idModelo").value, Number(document.getElementById("idPrecio").value));
}
