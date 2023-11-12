const boton = document.getElementById('boton')
const circulo = document.getElementById('circulo')
const container = document.getElementById('container')
const texto = document.getElementById('texto')

abajo = false;
boton.addEventListener('change',function(){
    if (abajo) {
       circulo.style.marginTop = ''
        circulo.style.backgroundColor = '#01B9A0'
        texto.style.display = "none"
        circulo.style.animation = ""
        abajo = false
    }else{
    
    circulo.style.backgroundColor = 'red'
    abajo = true;
    circulo.style.animation = "bajarBoton 2s"
    setTimeout(() => {
        texto.style.display = "grid"
    }, 1000);

    }
})