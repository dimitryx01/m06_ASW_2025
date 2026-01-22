// --- FASE 1: EVENTOS BÁSICOS (CLICS) ---

// 1. Buscamos el botón en el HTML para poder usarlo en JS
const boton = document.getElementById('btn-multi');

// 2. Definimos qué queremos que pase (las instrucciones)
function primeraFuncion() {
    console.log("--> Acción 1: Guardando en consola...");
}

function segundaFuncion() {
    alert("--> Acción 2: ¡Mostrando alerta!");
}

// 3. "Escuchamos" el evento. 
// A diferencia de 'onclick', addEventListener permite apilar varias funciones.
// Cuando hagan click, se ejecutarán las dos, una tras otra.
boton.addEventListener('click', primeraFuncion);
boton.addEventListener('click', segundaFuncion);


// --- FASE 2: EVENTOS DE TECLADO (LO IMPORTANTE) ---

const cuerpo = document.getElementById('main-body');

// Aquí es donde ocurre la magia.
// La función recibe un parámetro 'e' (puedes llamarlo 'event', 'evento', 'e'...)
cuerpo.addEventListener('keydown', function(e) {
    
    // 'e' es el OBJETO EVENTO (el informe del reportero).
    // .type nos dice qué pasó ("keydown" = tecla bajando).
    console.log("¿Qué pasó?: " + e.type);
    
    // .key nos dice QUÉ TECLA ESPECÍFICA causó el evento.
    // Si pulsas la letra A, e.key valdrá "a".
    // Si pulsas Enter, e.key valdrá "Enter".
    console.log("¿Qué tecla tocaste?: " + e.key); 
});


// --- FASE 3: RESTRICCIÓN (EL USO PRÁCTICO DE 'e') ---

const textarea = document.getElementById('campo-texto');

textarea.addEventListener('keydown', function(e) {
    
    // Imagina que el usuario pulsa el '5'.
    // Entonces e.key vale "5".
    
    // Preguntamos: ¿Es el valor de la tecla un número entre 0 y 9?
    if (e.key >= '0' && e.key <= '9') {
        
        // ¡SÍ ES UN NÚMERO! Detectamos que el usuario intenta escribir un dígito.
        
        // e.preventDefault() significa: "Prevenir el comportamiento por defecto".
        // El comportamiento por defecto de una tecla es escribir la letra en la pantalla.
        // Al ejecutar esto, le decimos al navegador: "Ignora esa tecla, no la escribas".
        e.preventDefault();
        
        // Avisamos al usuario
        alert("¡Alto ahí! La tecla " + e.key + " no está permitida. Solo letras.");
    }
    
    // Si la tecla NO fuera un número (ej: 'a'), el 'if' se ignora 
    // y la letra se escribe normalmente.
});