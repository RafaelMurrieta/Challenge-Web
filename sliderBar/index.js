var botonMenu = document.getElementById('butonMenu');
var icons = document.querySelector('.icons');
var container = document.querySelector('.container');
var house = document.getElementById('house');
var houseicon = document.getElementById('casita');
var perfil = document.getElementById('perfilZona');
var perfilIcon = document.getElementById('perfilIcon');
var mensaje = document.getElementById('chat');
var iconMensaje = document.getElementById('iconMensaje');
var camara = document.getElementById('camera');
var iconcamara = document.getElementById('iconcamara');
botonMenu.addEventListener('click',function(){
icons.classList.toggle('iconsViews')
container.classList.toggle('conrainer-view')
})


var botones = document.querySelectorAll('.icons input[type="checkbox"]');
var botoneActivos = []

botones.forEach(function(checkbox){
    checkbox.addEventListener('change',function(){
        if (checkbox.checked) {
            botoneActivos.push(checkbox.id)
            if (checkbox.id == "home") {
                house.style.backgroundColor = "blue"
            }else if(checkbox.id == "perfil"){
                perfil.style.backgroundColor = "yellow"
            }else if(checkbox.id == "chateanding"){
                mensaje.style.backgroundColor = "green"
            }else if(checkbox.id == "cam"){
                camara.style.backgroundColor = "lightblue"
            }
            checkbox.addEventListener('change',function(){
                if(checkbox.checked == false)
                console.log("no activo");
                checkboxDesactivado = checkbox.id
                console.log(checkboxDesactivado);
                if(checkboxDesactivado == "home") {
                    house.style.backgroundColor = ""
                }else if(checkboxDesactivado == "perfil"){
                    perfil.style.backgroundColor = ""
                }else if (checkboxDesactivado == "chateanding"){
                    mensaje.style.backgroundColor =""
                }else if(checkboxDesactivado == "cam"){
                    camara.style.backgroundColor = ""
                }
            })
        }else{
            var index = botoneActivos.indexOf(checkbox.id)
            console.log(index + " INDEX"+ botoneActivos + " NO ESTAN");
            if (index !== -1) {
                botoneActivos.splice(index, 1)
            }
        }
        botones.forEach(function(checkboxDesactivado){
            if (checkboxDesactivado !== checkbox) {
                checkboxDesactivado.checked = false
                if(checkboxDesactivado.id == "home") {
                    house.style.backgroundColor = ""
                }else if(checkboxDesactivado.id == "perfil"){
                    perfil.style.backgroundColor = ""
                }else if (checkboxDesactivado.id == "chateanding"){
                    mensaje.style.backgroundColor =""
                }else if(checkboxDesactivado.id == "cam"){
                    camara.style.backgroundColor = ""
                }
            }
        })
    })
})