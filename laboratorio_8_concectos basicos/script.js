// clase base vehiculo
class Vehiculo {
  #velocidad
  #estadoMotor

  constructor(marca, modelo) {
    this.marca = marca
    this.modelo = modelo
    this.#velocidad = 0
    this.#estadoMotor = "apagado"
  }

  encenderMotor() {
    console.log(`Estado del motor antes: ${this.#estadoMotor}`)
    if (this.#estadoMotor === "apagado") {
      this.#estadoMotor = "encendido"
    } else {
      console.log("El motor ya estaba encendido.")
    }
    console.log(`Estado del motor despues: ${this.#estadoMotor}`)
  }

  acelerar(incremento) {
    console.log(`Velocidad antes: ${this.#velocidad} km/h`)
    this.#velocidad += incremento
    console.log(`Velocidad despues: ${this.#velocidad} km/h`)
  }
}

// subclases coche y bicicleta
class Coche extends Vehiculo {
  constructor(marca, modelo, numPuertas) {
    super(marca, modelo)
    this.numPuertas = numPuertas
  }

  acelerar(incremento) {
    super.acelerar(incremento)
    console.log("El coche acelera gracias a su motor.")
  }

  mostrarInformacion() {
    console.log(
      `Coche: ${this.marca} ${this.modelo} - Puertas: ${this.numPuertas}`
    )
  }
}

class Bicicleta extends Vehiculo {
  constructor(marca, modelo, tipo) {
    super(marca, modelo)
    this.tipo = tipo
  }

  encenderMotor() {
    console.log("Esta bicicleta no tiene motor, se mueve con pedales.")
    super.encenderMotor()
  }

  acelerar(incremento) {
    super.acelerar(incremento)
    console.log("La bicicleta acelera gracias a la fuerza de la persona.")
  }

  mostrarInformacion() {
    console.log(
      `Bicicleta: ${this.marca} ${this.modelo} - Tipo: ${this.tipo}`
    )
  }
}

// funcion polimorfica y pruebas
function inspeccionarVehiculo(vehiculo) {
  if (vehiculo && typeof vehiculo.mostrarInformacion === "function") {
    vehiculo.mostrarInformacion()
  } else {
    console.log("El objeto no tiene el metodo mostrarInformacion.")
  }
}

// pruebas simples en consola
const miCoche = new Coche("Toyota", "Corolla", 4)
const miBicicleta = new Bicicleta("Trek", "FX 3", "urbana")

console.log("--- pruebas con coche ---")
miCoche.encenderMotor()
miCoche.acelerar(20)
inspeccionarVehiculo(miCoche)

console.log("--- pruebas con bicicleta ---")
miBicicleta.encenderMotor()
miBicicleta.acelerar(10)
inspeccionarVehiculo(miBicicleta)

const objetoSimple = {
  mostrarInformacion() {
    console.log("Soy un objeto simple con mostrarInformacion.")
  }
}

console.log("--- pruebas con objeto simple ---")
inspeccionarVehiculo(objetoSimple)