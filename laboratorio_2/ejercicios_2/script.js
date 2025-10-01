let dato;

function juego() {
    var numero = Math.floor(Math.random() * 100) + 1;
    
    for (let i = 1; i <= 7; i++) {
        dato = prompt('Intento ' + i + '/7. Adivina el numero (1-100):');
        dato = parseInt(dato);

        if (dato > numero) {
            console.log('El numero ingresado es mayor');
            window.alert('El numero ingresado es mayor');//lo puse con windows por que con console log no sirve
        } else if (dato < numero) {
            console.log('El numero ingresado es menor');
            window.alert('El numero ingresado es menor');
        } else {
            console.log('¡GANASTE!');
            console.log('Tus intentos fueron: ' + i);
            window.alert('¡GANASTE!');
            window.alert('Tus intentos fueron: ' + i);
            return; // Salir de la función si gana
        }
        
        if (i === 7) {
            console.log('Has perdido. El número era ' + numero);
            window.alert('Has perdido. El número era ' + numero);
        }
    }
}
