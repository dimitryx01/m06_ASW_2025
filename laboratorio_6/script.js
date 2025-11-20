// Laboratorio 6: Clase País
// -----------------------------------------------------------------------

// Apartado 1 – Definicion de la clase y sus propiedades
console.log("--- Apartado 1 – Clase y Constructor ---");

class Pais {
    constructor(nombre, poblacion, area, ciudades) {
        this.nombre = nombre;
        this.poblacion = poblacion;
        this.area = area;
        this.ciudades = ciudades;
    }

    // Apartado 2 – Metodos con operadores basicos
    
    incrementarPoblacion(cantidad) {
        // Suma la cantidad recibida a la población usando +=
        this.poblacion += cantidad;
        return this.poblacion;
    }

    densidad() {
        // Calcula la densidad (población / área)
        let resultado = this.poblacion / this.area;
        return resultado;
    }
    
    // Apartado 3 – Operadores comparativos y ternario

    compararArea(otroPais) {
        // Compara el área y usa el operador ternario para el mensaje
        return (this.area > otroPais.area) ? 
               `${this.nombre} es más grande que ${otroPais.nombre}` : 
               `${otroPais.nombre} es más grande que ${this.nombre}`;
    }

    // Apartado 4 – Trabajo con listas y bucles anidados

    mostrarCiudades() {
        console.log(`\nCiudades de ${this.nombre}:`);
        // Recorre y muestra cada ciudad
        for (let i = 0; i < this.ciudades.length; i++) {
            console.log(`- ${this.ciudades[i]}`);
        }
    }

    mostrarCiudadesPorLetra() {
        console.log(`\nDesglose de letras de las ciudades de ${this.nombre}:`);
        // Bucle externo: recorre cada ciudad
        for (let i = 0; i < this.ciudades.length; i++) {
            let ciudad = this.ciudades[i];
            console.log(`> Ciudad: ${ciudad}`);
            // Bucle interno: recorre cada letra de la ciudad
            for (let j = 0; j < ciudad.length; j++) {
                console.log(`  Letra ${j + 1}: ${ciudad[j]}`);
            }
        }
    }
}

// Apartado 5 – Prueba del código
console.log("\n--- Apartado 5 – Creación de Objetos País ---");
console.log("Lo que se va a imprimir: Los dos objetos País creados.");

let pais1 = new Pais("Colombia", 51000000, 1141748, ["Bogotá", "Medellín", "Cali"]);
let pais2 = new Pais("Ecuador", 18000000, 283561, ["Quito", "Guayaquil", "Cuenca"]);

console.log("Resultado (País 1):", pais1);
console.log("Resultado (País 2):", pais2);


// Pruebas de Métodos
console.log("\n--- Prueba de Métodos (Resultados) ---");


// --------------------
// 2.1. incrementarPoblacion(cantidad)
console.log("\n--- 2.1. Método: incrementarPoblacion(cantidad) ---");
console.log(`Entrada (País 1): 1,000,000. Salida esperada: Nueva población de ${pais1.nombre}.`);
let nuevaPoblacion = pais1.incrementarPoblacion(1000000);
console.log("Resultado: ", nuevaPoblacion);


// --------------------
// 2.2. densidad()
console.log("\n--- 2.2. Método: densidad() ---");
console.log(`Entrada (País 2): Ninguna. Salida esperada: Densidad de ${pais2.nombre} (Población / Área).`);
let densidadPais2 = pais2.densidad();
console.log("Resultado: ", densidadPais2.toFixed(2) + " hab/km²");


// --------------------
// 3. compararArea(otroPais)
console.log("\n--- 3. Método: compararArea(otroPais) ---");
console.log(`Entrada: País 2 (Ecuador). Salida esperada: Mensaje comparando área de ${pais1.nombre} y ${pais2.nombre}.`);
let comparacion = pais1.compararArea(pais2);
console.log("Resultado: ", comparacion);


// --------------------
// 4.1. mostrarCiudades()
console.log("\n--- 4.1. Método: mostrarCiudades() ---");
console.log(`Entrada: Ninguna. Salida esperada: Lista de ciudades de ${pais1.nombre} en consola.`);
pais1.mostrarCiudades();


// --------------------
// 4.2. mostrarCiudadesPorLetra()
console.log("\n--- 4.2. Método: mostrarCiudadesPorLetra() ---");
console.log(`Entrada: Ninguna. Salida esperada: Cada ciudad y sus letras desglosadas en consola para ${pais2.nombre}.`);
pais2.mostrarCiudadesPorLetra();