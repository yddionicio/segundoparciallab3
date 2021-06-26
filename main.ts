
window.addEventListener("load", () => {

    document.getElementById("Agregar")?.addEventListener("click", Guardar);
    Manejadora.MostrarVehiculos();

    let boton = document.getElementById("idAlta");
    boton?.addEventListener("click", form);

    document.getElementById("selectFiltro")?.addEventListener("change", recargar);

})

function recargar(){
    let tabla = document.getElementById("tbody");
    while (tabla?.hasChildNodes()) {
        tabla.removeChild((tabla.lastChild as Node));
    }
    Manejadora.MostrarVehiculos();
}


function form() {

    var form = document.getElementById("form");

    if (form) {
        form.className = "visible";

        let alta = document.getElementById("Cerrar");
        if (alta) {
            alta.onclick = (e) => {
                e.preventDefault();
                if (form) {
                    form.className = "invisible"
                }
            }
        }

    }

}

function Guardar() {
    Manejadora.AgregarVehiculos(
        Number((document.getElementById("Id") as HTMLInputElement).value),
        (document.getElementById("idMarca") as HTMLInputElement).value,
        (document.getElementById("idModelo") as HTMLInputElement).value,
        Number((document.getElementById("idPrecio") as HTMLInputElement).value
        )
    )
}