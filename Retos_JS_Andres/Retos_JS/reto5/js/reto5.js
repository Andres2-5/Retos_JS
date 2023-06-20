function comprobarSeleccion() {
    var nombreSeleccionado = document.getElementById("selecNomb").value;
    var apellidoSeleccionado = document.getElementById("selecApe").value;
    var actividadSeleccionada = document.getElementById("selecActi").value;

    var nombresCorrectos = ["Sandra", "Cristian", "Jennifer"];
    var apellidosCorrectos = ["Rueda", "Ortega", "Fajardo"];
    var actividadesCorrectas = ["Base de Datos", "Arquitectura de Software", "JavaScript"];

    var respuestaCorrecta = false;

    for (var i = 0; i < nombresCorrectos.length; i++) {
        if (nombreSeleccionado === nombresCorrectos[i] &&
            apellidoSeleccionado === apellidosCorrectos[i] &&
            actividadSeleccionada === actividadesCorrectas[i]) {
            respuestaCorrecta = true;
            break;
        }
    }

    if (respuestaCorrecta) {
        alert("La respuesta es correcta.");
    } else {
        alert("La respuesta es incorrecta.");
    }
}