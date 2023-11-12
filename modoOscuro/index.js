var change = document.getElementById('change');
var body = document.body;
const boton = document.getElementById('circle');
var botonBody = document.getElementById('button-body');

const LIGHT_MODE = 'white';
const DARK_MODE = '#2C2B2C';

var modo = localStorage.getItem("modo");

// Si modo es null, establecer el modo predeterminado a oscuro
if (modo === null) {
    boton.style.transform = "translateX(0px)"
    modo = DARK_MODE;
}

body.style.backgroundColor = modo === LIGHT_MODE ? LIGHT_MODE : DARK_MODE;
change.style.background = modo == LIGHT_MODE ? LIGHT_MODE : DARK_MODE;
botonBody.style.background = modo == LIGHT_MODE ? modoClaro() : modoOscuro();

boton.addEventListener('click', function() {
    if (modo === LIGHT_MODE) {
        modoOscuro();
    } else {
        modoClaro();
    }
});

function modoClaro() {
    body.style.backgroundColor = LIGHT_MODE;
    body.style.transform = "background-color 5s"
    modo = LIGHT_MODE;
    change.style.backgroundColor = '#FBFAFB';
    botonBody.style.backgroundColor = LIGHT_MODE;
    boton.style.backgroundColor = '#F1EFF1';
    botonBody.style.boxShadow = 'rgb(164 164 164 / 50%) 0px 0px 20px 1px';
    localStorage.setItem("modo", modo);
    boton.style.transform = "translateX(400px)"

}

function modoOscuro() {
    body.style.transform = "background-color 5s"
    body.style.backgroundColor = DARK_MODE;
    modo = DARK_MODE;
    change.style.backgroundColor = '#232123';
    botonBody.style.backgroundColor = '#333233';
    botonBody.style.boxShadow = '0 0 20px 1px rgba(255, 254, 254, 0.5)';
    boton.style.backgroundColor = '#333233';
    localStorage.setItem("modo", modo);
    boton.style.Left = "100px"
    boton.style.transform = "translateX(0px)"
}
