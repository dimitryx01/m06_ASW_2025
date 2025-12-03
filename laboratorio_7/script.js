// Laboratorio 7: Cookies, localStorage y sessionStorage

// ========================================
// Ejercicio 1: Creación de Array a partir de Cookies
// ========================================


console.log("Ejercicio 1:");
console.log("Voy a crear cookies y convertirlas en un array");

// Primero creo tres cookies diferentes para mi sesión
// Cada cookie tiene un nombre y un valor separados por el signo igual
document.cookie = "usuario=ana";
document.cookie = "idioma=es";
document.cookie = "tema=oscuro";

// Ahora guardo todas las cookies en una variable para poder trabajar con ellas
const allCookies = document.cookie;

// Imprimo todas las cookies en la consola para ver qué contienen
console.log("Todas las cookies:", allCookies);

// También las muestro en la página HTML para que se vean visualmente
document.getElementById('ejercicio1_output').innerText = "Todas las cookies: " + allCookies;

// Aquí convierto la cadena de texto de cookies en un array
// Uso el método split(';') que separa la cadena cada vez que encuentra un punto y coma
// Esto me da un array donde cada elemento es una cookie individual
const cookiesArray = document.cookie.split(';');

// Imprimo el array resultante para verificar que funcionó
console.log("Array de cookies:", cookiesArray);

// Imprimo la respuesta a la pregunta del ejercicio
console.log("Resultado: La línea de JavaScript para convertir la cadena completa de document.cookie en un array es: document.cookie.split(';')");


// ========================================
// Ejercicio 2: Formulario
// ========================================
console.log("\nEjercicio 2:");
console.log("Voy a capturar los valores del formulario y mostrarlos");

// Obtengo referencias a cada uno de los elementos del formulario usando sus IDs
// Esto me permite acceder a ellos más fácilmente en el código
const nombreInput = document.getElementById('nombre');
const fechaNacimientoInput = document.getElementById('fecha_nacimiento');
const nacionalidadSelect = document.getElementById('nacionalidad');

// Cuando el usuario cambie el valor del campo nombre, lo guardo en localStorage
// El evento 'change' se dispara cuando el usuario termina de editar el campo
nombreInput.addEventListener('change', () => {
    // Guardo el valor actual del input en localStorage con la clave 'nombre'
    localStorage.setItem('nombre', nombreInput.value);
    // Llamo a la función que muestra todos los valores actualizados
    displayEjercicio2Values();
});

// Hago lo mismo para el campo de fecha de nacimiento
fechaNacimientoInput.addEventListener('change', () => {
    // Guardo la fecha seleccionada en localStorage
    localStorage.setItem('fecha_nacimiento', fechaNacimientoInput.value);
    // Actualizo la visualización de los valores
    displayEjercicio2Values();
});

// Y también para el select de nacionalidad
nacionalidadSelect.addEventListener('change', () => {
    // Guardo el valor seleccionado del select en localStorage
    localStorage.setItem('nacionalidad', nacionalidadSelect.value);
    // Actualizo la visualización de los valores
    displayEjercicio2Values();
});

// Cuando la página se carga, recupero los valores guardados en localStorage
// Esto permite que los datos persistan aunque cierre y abra el navegador
window.addEventListener('load', () => {
    // Si hay un nombre guardado en localStorage, lo cargo en el input
    if (localStorage.getItem('nombre')) {
        nombreInput.value = localStorage.getItem('nombre');
    }
    // Si hay una fecha guardada, la cargo en el input de fecha
    if (localStorage.getItem('fecha_nacimiento')) {
        fechaNacimientoInput.value = localStorage.getItem('fecha_nacimiento');
    }
    // Si hay una nacionalidad guardada, la selecciono en el select
    if (localStorage.getItem('nacionalidad')) {
        nacionalidadSelect.value = localStorage.getItem('nacionalidad');
    }
    // Muestro todos los valores cargados
    displayEjercicio2Values();
});

// Esta función muestra los valores actuales del formulario en la página y en la consola
function displayEjercicio2Values() {
    // Obtengo el div donde voy a mostrar los valores
    const outputDiv = document.getElementById('ejercicio2_output');
    
    // Creo el HTML con los valores actuales de cada campo del formulario
    outputDiv.innerHTML = `
        <p>Nombre: ${nombreInput.value}</p>
        <p>Fecha de nacimiento: ${fechaNacimientoInput.value}</p>
        <p>Nacionalidad: ${nacionalidadSelect.value}</p>
    `;
    
    // También imprimo los valores en la consola para poder verificarlos
    console.log("Resultado Ejercicio 2:");
    console.log("Nombre:", nombreInput.value);
    console.log("Fecha de nacimiento:", fechaNacimientoInput.value);
    console.log("Nacionalidad:", nacionalidadSelect.value);
}


// ========================================
// Ejercicio 3: Nodo de Párrafo
// ========================================
console.log("\nEjercicio 3:");
console.log("Voy a crear un elemento de lista y añadirlo a un párrafo");

// Obtengo la referencia al párrafo que tiene el id="mensaje"
const mensajeParrafo = document.getElementById('mensaje');

// Paso 1: Creo un nuevo elemento de lista (<li>) usando createElement
// Este elemento todavía no está en el DOM, solo existe en memoria
const nuevoLi = document.createElement('li');

// Paso 2: Le asigno el texto "Nuevo Mensaje" al elemento de lista que acabo de crear
// Uso textContent para asignar texto plano de forma segura
nuevoLi.textContent = "Nuevo Mensaje";

// Paso 3: Modifico el contenido del párrafo para que contenga el elemento de lista
// Primero limpio cualquier contenido previo que pudiera tener el párrafo
mensajeParrafo.innerHTML = '';
// Ahora añado el elemento de lista como hijo del párrafo
mensajeParrafo.appendChild(nuevoLi);

// Imprimo en consola que he completado el ejercicio
console.log("Resultado Ejercicio 3: El párrafo con id='mensaje' ahora contiene un elemento de lista con el texto 'Nuevo Mensaje'.");
// Muestro el HTML resultante del párrafo para verificar que se añadió correctamente
console.log("Contenido HTML del párrafo:", mensajeParrafo.innerHTML);


// ========================================
// Ejercicio 4: Botón de Opción
// ========================================
console.log("\nEjercicio 4:");
console.log("Voy a verificar si el usuario acepta las condiciones y cambiar el color de fondo");

// Obtengo la referencia al radio button que tiene el id="acepto_condiciones"
const aceptoCondicionesRadio = document.getElementById('acepto_condiciones');

// Creo una función que aplica el color de fondo según si el radio está marcado o no
function aplicarFondo() {
    // Verifico si el radio button está marcado (checked)
    if (aceptoCondicionesRadio.checked) {
        // Si está marcado, pongo el fondo verde porque el usuario aceptó
        document.body.style.backgroundColor = "lightgreen";
        // Guardo en sessionStorage que el usuario aceptó las condiciones
        sessionStorage.setItem('acepto_condiciones', 'true');
        // Imprimo en consola que el fondo es verde
        console.log("Resultado Ejercicio 4: Fondo verde (aceptado)");
    } else {
        // Si no está marcado, pongo el fondo rojo porque el usuario no aceptó
        document.body.style.backgroundColor = "lightcoral";
        // Guardo en sessionStorage que el usuario no aceptó las condiciones
        sessionStorage.setItem('acepto_condiciones', 'false');
        // Imprimo en consola que el fondo es rojo
        console.log("Resultado Ejercicio 4: Fondo rojo (no aceptado)");
    }
}

// Cuando la página se carga, recupero el estado guardado en sessionStorage
// Esto hace que el estado persista aunque cierre el navegador
window.addEventListener('load', () => {
    // Obtengo el valor guardado en sessionStorage
    const estadoAceptacion = sessionStorage.getItem('acepto_condiciones');
    
    // Si el usuario había aceptado antes, marco el radio button
    if (estadoAceptacion === 'true') {
        aceptoCondicionesRadio.checked = true;
    } else {
        // Si no había aceptado o no hay valor guardado, dejo el radio desmarcado
        aceptoCondicionesRadio.checked = false;
    }
    
    // Aplico el color de fondo correspondiente al estado cargado
    aplicarFondo();
});

// Escucho cuando el usuario hace clic en el radio button
// Cada vez que cambie su estado, aplico el color de fondo correspondiente
aceptoCondicionesRadio.addEventListener('change', aplicarFondo);