
const ob_nombre = document.getElementById('nombre');


function lanzar() {


};


lanzar();

function guardar_preferencias() {

    console.log("funcion llamada")

}




var boton = document.getElementById('save')

const bgcolor = document.getElementById('bgColor')
const name = document.getElementById('nickname');

boton.addEventListener('click', () => {
    const color = bgcolor.value;
    const name2 = name.value;

    document.body.style.backgroundColor = color;
    ob_nombre.textContent = name2;

}
)

