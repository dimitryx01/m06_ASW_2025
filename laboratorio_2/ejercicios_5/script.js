// Clase Alumno básica
class Alumno {
    constructor(nombre, edad, nota) {
        this.nombre = nombre;
        this.edad = edad;
        this.nota = nota;
    }
    
    estaAprobado() {
        return this.nota >= 5;
    }
    
    presentacion() {
        const estado = this.estaAprobado() ? "Aprobado" : "Suspenso";
        return `Soy ${this.nombre}, tengo ${this.edad} años y mi nota es ${this.nota} (${estado}).`;
    }
}

// Clase hija AlumnoBecado
class AlumnoBecado extends Alumno {
    constructor(nombre, edad, nota, beca) {
        super(nombre, edad, nota);
        this.beca = beca;
    }
    
    presentacion() {
        const estado = this.estaAprobado() ? "Aprobado" : "Suspenso";
        return `Soy ${this.nombre}, tengo ${this.edad} años y mi nota es ${this.nota} (${estado}). Tengo una beca de ${this.beca}€.`;
    }
}

// Crear 3 instancias de Alumno
const alumno1 = new Alumno("Ana", 20, 7);
const alumno2 = new Alumno("Carlos", 19, 4);
const alumno3 = new Alumno("María", 21, 9);

// Crear una instancia de AlumnoBecado
const alumno4 = new AlumnoBecado("Pedro", 22, 8, 1500);

// Mostrar en consola
console.log(alumno1.presentacion());
console.log(alumno2.presentacion());
console.log(alumno3.presentacion());
console.log(alumno4.presentacion());
