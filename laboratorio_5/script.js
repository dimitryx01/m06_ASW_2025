// 1. Ejercicios con Matrices (Array de Arrays)

// 1.1. Creación de una Matriz
console.log("--- 1.1. Creación de una Matriz ---");
console.log("Lo que se va a imprimir: La matriz de inventario definida.");

let inventario = [
    ["Camisa", 50, 25.99],
    ["Pantalón", 30, 49.50],
    ["Zapatos", 15, 75.00]
];

console.log("Resultado: ", inventario);


// 1.2. Acceso y Modificación Matricial
console.log("\n--- 1.2. Acceso y Modificación Matricial ---");

// Acceso al nombre del producto en la segunda fila (índice 1) y su precio (índice 2)
let nombreSegundoProducto = inventario[1][0];
let precioSegundoProducto = inventario[1][2];

console.log("Lo que se va a imprimir: Nombre del producto en la segunda fila y su precio.");
console.log(`Resultado: Nombre: ${nombreSegundoProducto}, Precio: ${precioSegundoProducto}`);

// Uso de .length para el número de filas y elementos en la primera fila
let numFilas = inventario.length;
let numElementosPrimeraFila = inventario[0].length;

console.log("Lo que se va a imprimir: Número total de filas y número de elementos en la primera fila.");
console.log(`Resultado: Número de filas: ${numFilas}, Elementos en la primera fila: ${numElementosPrimeraFila}`);


// 1.3. Recorrido Simple
console.log("\n--- 1.3. Recorrido Simple ---");
console.log("Lo que se va a imprimir: Nombre de todos los productos y el índice de lista (empezando por 1).");

for (let i = 0; i < inventario.length; i++) {
    let producto = inventario[i];
    let indiceLista = i + 1;
    let nombreProducto = producto[0];

    console.log(`Elemento de la lista: ${indiceLista}, Nombre del producto: ${nombreProducto}`);
}


// 2. Ejercicios con Funciones

// 2.1. Función para Cálculo de Inventario
console.log("\n--- 2.1. Función para Cálculo de Inventario ---");

function calcularValorTotal(matriz) {
    let valorTotal = 0;
    // Se recorre cada fila (producto) en la matriz
    for (let i = 0; i < matriz.length; i++) {
        let cantidad = matriz[i][1]; // Cantidad está en el índice 1
        let precio = matriz[i][2];   // Precio está en el índice 2
        let valorProducto = cantidad * precio;
        valorTotal = valorTotal + valorProducto;
    }
    return valorTotal;
}

// Invocación de la función
let valorInventario = calcularValorTotal(inventario);

console.log("Lo que se va a imprimir: Invocando la función 'calcularValorTotal' con el inventario.");
console.log(`Entrada: La matriz 'inventario' con 3 productos.`);
console.log("Resultado: ", valorInventario.toFixed(2)); // Formato a 2 decimales