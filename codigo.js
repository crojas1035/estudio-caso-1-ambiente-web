
function agregarEstudiante() {

    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let nota = document.getElementById("nota").value;

    let mensaje = document.getElementById("mensaje");

    if (nombre.trim() == "" || apellidos.trim() == "" || nota.trim() == "") {

        mensaje.textContent = "Error: Todos los campos son obligatorios.";

    } else if (isNaN(Number(nota)) || Number(nota) < 0 || Number(nota) > 100) {

        mensaje.textContent = "Error: La nota debe estar entre 0 y 100.";

    } else {

        let tabla = document.getElementById("tablaEstudiantes");

        let fila = document.createElement("tr");

        let columnaNombre = document.createElement("td");
        columnaNombre.textContent = nombre;

        let columnaApellidos = document.createElement("td");
        columnaApellidos.textContent = apellidos;

        let columnaNota = document.createElement("td");
        columnaNota.textContent = nota;

        fila.appendChild(columnaNombre);
        fila.appendChild(columnaApellidos);
        fila.appendChild(columnaNota);

        tabla.appendChild(fila);

        mensaje.textContent = "Estudiante agregado correctamente.";

        document.getElementById("nombre").value = "";
        document.getElementById("apellidos").value = "";
        document.getElementById("nota").value = "";

        calcularResumen();
        aplicarColores();
    }
}

function calcularResumen() {

    let tabla = document.getElementById("tablaEstudiantes");
    let filas = tabla.getElementsByTagName("tr");

    let suma = 0;
    let mayor = -1;
    let menor = 101;
    let estudianteMayor = "";

    for (let i = 0; i < filas.length; i++) {

        let columnas = filas[i].getElementsByTagName("td");

        let nombre = columnas[0].textContent;
        let apellidos = columnas[1].textContent;
        let nota = Number(columnas[2].textContent);

        suma = suma + nota;

        if (nota > mayor) {
            mayor = nota;
            estudianteMayor = nombre + " " + apellidos;
        }

        if (nota < menor) {
            menor = nota;
        }
    }

    let promedio = suma / filas.length;

    document.getElementById("mayorNota").textContent =
        "Estudiante con mayor nota: " + estudianteMayor + " - " + mayor;

    document.getElementById("promedio").textContent =
        "Promedio de notas: " + promedio.toFixed(2);

    document.getElementById("menorNota").textContent =
        "Nota más baja: " + menor;
}

function aplicarColores() {

    let tabla = document.getElementById("tablaEstudiantes");
    let filas = tabla.getElementsByTagName("tr");

    for (let i = 0; i < filas.length; i++) {

        let columnas = filas[i].getElementsByTagName("td");
        let nota = Number(columnas[2].textContent);

        if (nota >= 80) {

            columnas[2].className = "notaVerde";

        } else if (nota < 65) {

            columnas[2].className = "notaRoja";

        } else {

            columnas[2].className = "";

        }
    }
}

calcularResumen();
aplicarColores();


