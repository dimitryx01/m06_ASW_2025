// EJERCICIO 1
const botonTest = document.getElementById('test-click');

botonTest.addEventListener('mousedown', function() {
    console.log('mousedown');
});

botonTest.addEventListener('mouseup', function() {
    console.log('mouseup');
});

botonTest.addEventListener('click', function() {
    console.log('click');
});

botonTest.addEventListener('dblclick', function() {
    console.log('dblclick');
});


// EJERCICIO 2
const padre = document.getElementById('padre');
const hijo = document.getElementById('hijo');
const botonBubbling = document.getElementById('boton-bubbling');

botonBubbling.addEventListener('click', function() {
    console.log('Click en el Botón');
});

hijo.addEventListener('click', function() {
    console.log('Click en el Hijo');
});

padre.addEventListener('click', function() {
    console.log('Click en el Padre');
});


// EJERCICIO 3
const padre2 = document.getElementById('padre2');
const hijo2 = document.getElementById('hijo2');
const botonStop = document.getElementById('boton-stop');

botonStop.addEventListener('click', function(e) {
    console.log('Click en el Botón (con stopPropagation)');
    e.stopPropagation();
});

hijo2.addEventListener('click', function() {
    console.log('Click en el Hijo');
});

padre2.addEventListener('click', function() {
    console.log('Click en el Padre');
});