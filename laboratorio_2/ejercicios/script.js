
var variable_global_var = 12;
let variable_global_let = 13;
const variable_global_const = 14;

function variables() {

    var variable_funcion_var = 15;
    let variable_funcion_let = 16;
    const variable_funcion_const = 17;


    console.log("dentro de la funcion pero antes del Bloque");
    console.log("variable_bloque_var : " + variable_bloque_var);//al hacer hoisting la variable se muestra undefined por que todavia no se ha declarado
    if (true) {

        var variable_bloque_var = 18;//esta variable hace hoisting cuando empieza la ejecucion
        let variable_bloque_let = 19;
        const variable_bloque_const = 20;

        console.log("mostrando dentro del bloque");
        console.log("variable_bloque_var : " + variable_bloque_var);//puedo acceder por que estoy dentro de la bloque
        console.log("variable_bloque_let: " + variable_bloque_let);//puedo acceder por que estoy dentro de la bloque
        console.log("variable_bloque_const : " + variable_bloque_const);//puedo acceder por que estoy dentro de la bloque
    }

    console.log("dentro de la funcion");
    console.log("variable_funcion_var : " + variable_funcion_var);//puedo acceder por que estoy dentro de la funcion
    console.log("variable_funcion_let: " + variable_funcion_let);//puedo acceder por que estoy dentro de la funcion
    console.log("variable_funcion_const : " + variable_funcion_const);//puedo acceder por que estoy dentro de la funcion


    console.log("dentro de la funcion pero despues del Bloque");
    console.log("variable_bloque_var : " + variable_bloque_var);//aqui ya se va a mostrar el valor correcto por que el scoope se salta el bloque
    console.log("No se puede acceder variable_bloque_let por la restriccion del scoope block ");//console.log("variable_bloque_let: " + variable_bloque_let);
    console.log("No se puede acceder variable_bloque_const por la restriccion del scoope block ");//console.log("variable_bloque_const : " + variable_bloque_const);

}
console.log("variables globales");
console.log("variable_global_var : " + variable_global_var);//puedo acceder por que son globales
console.log("variable_global_let: " + variable_global_let);//puedo acceder por que son globales
console.log("variable_global_const : " + variable_global_const);//puedo acceder por que son globales
console.log("funcion");
console.log("No se puede acceder variable_funcion_var por la restriccion del scoope funcion");//console.log("variable_funcion_var : "+variable_funcion_var );
console.log("No se puede acceder variable_funcion_let por la restriccion del scoope funcion");//console.log("variable_funcion_let: "+variable_funcion_let );
console.log("No se puede acceder variable_funcion_const por la restriccion del scoope funcion ");//console.log("variable_funcion_const : "+variable_funcion_const );
console.log("Bloque");
console.log("No se puede acceder variable_bloque_var por la restriccion del scoope block ");//console.log("variable_bloque_var : "+variable_bloque_var );
console.log("No se puede acceder variable_bloque_let por la restriccion del scoope block ");//console.log("variable_bloque_let: "+variable_bloque_let );
console.log("No se puede acceder variable_bloque_const por la restriccion del scoope block ");//console.log("variable_bloque_const : "+variable_bloque_const );


console.log("cambiando valores ");
console.log("no puedo cambiarle el valor a variable_bloque_const");//variable_global_const = 33;

const array_frutas = ["manzana", "pera"];
console.log("array_frutas: " + array_frutas);
console.log("no me permite cambiar el array completo");//array_frutas=["naranja","lulo"];
array_frutas[1] = ["naranja"];// se puede modificar/mutar por que la reserva de memoria sigue siendo la misma
console.log("cambiando un solo elemento del array");
console.log("array_frutas: " + array_frutas);//se muestra el array cambiado