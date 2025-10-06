function calcularEdadYDia() {
    let fechaNacimientoStr = prompt("Introduce tu fecha de nacimiento (DD/MM/AAAA):");

  


    const partesFecha = fechaNacimientoStr.split('/');
    const dia = parseInt(partesFecha[0]);
    const mes = parseInt(partesFecha[1]) - 1; // Meses en JavaScript son de 0 a 11
    const año = parseInt(partesFecha[2]);

    const fechaNacimiento = new Date(año, mes, dia);

 
    const hoy = new Date();
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const mesActual = hoy.getMonth();
    const diaActual = hoy.getDate();

    if (mesActual < fechaNacimiento.getMonth() || (mesActual === fechaNacimiento.getMonth() && diaActual < fechaNacimiento.getDate())) {
        edad--;
    }

   
    alert(`Naciste el ${fechaNacimientoStr}, tienes ${edad} años `);
}

calcularEdadYDia();//no se por que no me funciona desde el enlace de pulsar y me toco llamarla asi