// Mostrar tamaño de la ventana en consola
console.log("Ancho: " + window.innerWidth);
console.log("Alto: " + window.innerHeight);

alert("¡Bienvenido a mi página!");

// Preguntar nombre y mostrarlo
var nombre = prompt("¿Cómo te llamas?");
document.write("<h1>Hola " + nombre + "!</h1>");

// Variable para guardar la ventana nueva
var ventanaNueva;

function abrirVentana() {
    ventanaNueva = window.open("https://www.google.com", "_blank", "width=600,height=400");
}


function cerrarVentana() {
    var respuesta = confirm("¿Quieres cerrar la ventana?");
    if (respuesta == true) {
        ventanaNueva.close();
    }
}