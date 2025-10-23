console.log("=================================================")
console.log("===============     PARTE 1. ====================")
console.log("=================================================")
//llenamos el array con los diferentes dipos de datos
let datosUsuario = [String("nombre"), Number(32), Boolean(true)];

console.log("imprimiendo indice 2 del array: " + datosUsuario[1]);
console.log("imprimiendo longitud del array array: " + datosUsuario.length)

//imprimiendo todo los indices del array
mensaje = "";
for (i = 0; i < datosUsuario.length; i++) {
    mensaje =mensaje+ " indice" + i + " => " + datosUsuario[i];

}
console.log(mensaje);

console.log("=================================================")
console.log("===============     PARTE 2. ====================")
console.log("=================================================")
//insertando dato nuevo al array
datosUsuario.push(String("palabra"))
//insertando dato nuevo al array
datosUsuario.push(Number(45))
mensaje = "";
for (i = 0; i < datosUsuario.length; i++) {
    mensaje =mensaje+ " indice" + i + " => " + datosUsuario[i];

}
console.log(mensaje);
//mostrando longitud
console.log("imprimiendo longitud del array array: " + datosUsuario.length)
console.log("imprimiendo el ultimo elementos del array : " + datosUsuario.pop())
//insertando valor al inicio del array
datosUsuario.unshift(Number(85))
//imprimiendo todo los indices del array
mensaje = "";
for (i = 0; i < datosUsuario.length; i++) {
    mensaje =mensaje+ " indice" + i + " => " + datosUsuario[i];

}
console.log(mensaje);
//mostrando longitud
console.log("imprimiendo longitud del array array: " + datosUsuario.length)

//eliminar el primer elemento del array
datosUsuario.shift(); 

mensaje = "";
for (i = 0; i < datosUsuario.length; i++) {
    mensaje =mensaje+ ", indice" + i + " => " + datosUsuario[i];

}
console.log(mensaje);
//mostrando longitud
console.log("imprimiendo longitud del array array: " + datosUsuario.length)

//creando array extra
let extraArray = [String("pepito"), Number(16), Boolean(false)];
//uniendo arrays
arrayTotal=datosUsuario.concat(extraArray);

//imprimiento arraytotal
mensaje = "";
for (i = 0; i < arrayTotal.length; i++) {
    mensaje =mensaje+ ", indice" + i + " => " + arrayTotal[i];

}
console.log(mensaje);

//mostrando longitud
console.log("imprimiendo longitud del array total: " + arrayTotal.length)


let numeros=[6,3,5,6,1,2,40,5,434,5,6,-2]

//imprimiento array
mensaje = "";
for (i = 0; i < numeros.length; i++) {
    mensaje =mensaje+ "  , " + numeros[i];

}
console.log("Array numeros"+mensaje);

//mostrando longitud
console.log("imprimiendo longitud del array total: " + numeros.length)


//ordenando con sort
numeros.sort();
console.log("ORDENANDO CON SORT()")

console.log("la funcion SORT() ordena strings en orden afabetico, por consecuente cuando se usa para ordenar numeros, el resultado que se genera es extrano por que no funciona de esa manera")

//imprimiento array
mensaje = "";
for (i = 0; i < numeros.length; i++) {
    mensaje =mensaje+ "  , " + numeros[i];

}
console.log("Array numeros"+mensaje);

//mostrando longitud
console.log("imprimiendo longitud del array total: " + numeros.length)



console.log("ORDENANDO CON SORT() con comparativas")

console.log("para que funcione con numeros se requiere utilizar una funcion comparativa ordenando con sort")
numeros.sort((a, b) => a - b);      // ascendente

//imprimiento array
mensaje = "";
for (i = 0; i < numeros.length; i++) {
    mensaje =mensaje+ "  , " + numeros[i];

}
console.log("Array numeros ascendente"+mensaje);

//mostrando longitud
console.log("imprimiendo longitud del array total: " + numeros.length)

numeros.sort((a, b) => b - a);      // desendente

//imprimiento array
mensaje = "";
for (i = 0; i < numeros.length; i++) {
    mensaje =mensaje+ "  , " + numeros[i];

}
console.log("Array numeros desendente"+mensaje);

//mostrando longitud
console.log("imprimiendo longitud del array total: " + numeros.length)

console.log("=================================================")
console.log("===============     PARTE 3. ====================")
console.log("=================================================")
//eliminando elementos
let a = [10, 20, 30, 40, 50];
console.log("array: "+a);  
let eliminados = a.splice(2, 2);  // desde índice 2 elimina 2 elems (30,40)
console.log("array despues de eliminar elementos: "+a);          // [10, 20, 50]
console.log("elementos eliminados del array: "+eliminados); // [30, 40]
//insertando elementos
const b = [1, 2, 5];
b.splice(2, 0, 3, 4);   // en índice 2 elimina 0, inserta 3 y 4
console.log(b); // [1, 2, 3, 4, 5]
//modificando elementos
const c = ["a", "b", "x", "y"];
c.splice(2, 2, "c", "d"); // desde 2 elimina 2 ("x","y") e inserta "c","d"
console.log(c); // ["a", "b", "c", "d"]

//usando indices negativos
const d = [1, 2, 3, 4, 5];
d.splice(-2, 1); // empieza en penúltimo (4) y elimina 1
console.log(d); // [1, 2, 3, 5]
//eliminar desde un indice hasta el final
a.splice(2); // deleteCount omitido ⇒ elimina todo desde indice



console.log("=================================================")
console.log("===============     PARTE 4. ====================")
console.log("=================================================")

//creamos una variable con texto
const frutas = "manzana";
//la funcion isNaN() es una forma que tiene javascript para deternimar
//si un dato no corresponde a un dato numerico valido, por ejemplo cuando se quiere convertir un string
//a un numero, el resultado sera true, por que ese string no es un numero
console.log("la cadena no es numero?: "+isNaN(frutas))



// Cadena decimal de ejemplo
const cadenaDecimal = "123.45px";   // incluye texto para ver el corte

// 1) parseInt(): convierte a entero (base 10) y se detiene al encontrar un carácter no válido
const entero = parseInt(cadenaDecimal, 10); // -> 123
console.log("Convirtiendo a parseInt:", entero, typeof entero); // number

// 2) parseFloat(): convierte a número de coma flotante (decimal)
const decimal = parseFloat(cadenaDecimal);  // -> 123.45
console.log("Convirtiendo aparseFloat:", decimal, typeof decimal); // number

// Notas:
// - Ambos ignoran espacios iniciales y se detienen cuando no pueden parsear más.
// - Si la cadena no empieza con un patrón numérico válido, devuelven NaN.

// 3) String(): convierte valores a cadena
const num = 789.01;
const comoCadena = String(num); // "789.01"
console.log("tipo String():", comoCadena, typeof comoCadena); // string

// 4) Number(): convierte una cadena “numérica” a número
const cadenaNumerica = "456.78";
const comoNumero = Number(cadenaNumerica); // 456.78
console.log("tipo Number():", comoNumero, typeof comoNumero); // number

// Casos útiles extra:
// Number("  42  ")    -> 42  (ignora espacios)
// Number("42px")      -> NaN (a diferencia de parseInt/parseFloat, Number exige que toda la cadena sea numérica)
// parseInt("08", 10)  -> 8   (especifica base 10 para evitar ambigüedades)
// parseFloat("1.23e2")-> 123 (soporta notación científica)