const child1 = document.getElementById('child1');
const child2 = document.getElementById('child2');
const child3 = document.getElementById('child3');
var imgBody = document.getElementById('img-body'); 
var urlImgBody = imgBody.src;
var nombreimg = urlImgBody.substring(urlImgBody.lastIndexOf('/')+1)

child1.addEventListener('mouseover', function() {
    child1.style.transition = "transform 0.5s"
    child1.style.transform = "rotate(-45deg)";
});

child1.addEventListener('mouseout',function(){
    child1.style.transition = "transform 0.5s"
    child1.style.transform = "rotate(0deg)"
});

imgBody.addEventListener('mouseover',function(){
    imgBody.style.cursor = "pointer"
    imgBody.style.transform = "scale(1.2)";
})
imgBody.addEventListener('mouseout',function(){
    imgBody.style.transform = "scale(1)";
})
child2.addEventListener("click", function() {
    // Crea un nuevo elemento de imagen
    var newImg = document.createElement('img');
    // Cambia la imagen según el nombre de la imagen actual
    if (nombreimg === '1.png') {
        newImg.src = 'images/3.png';
        child2.src = 'images/1.png'
        nombreimg = '3.png';
    } else if (nombreimg === '3.png') {
        newImg.src = 'images/1.png';
        child2.src = 'images/3.png'
        nombreimg = '1.png';
    }
    // Reemplaza la imagen existente con la nueva imagen
    imgBody.src = newImg.src; // Actualiza el src de imgBody
});

child3.addEventListener('click', function(){
    var newImg = document.createElement('img');
    if (nombreimg ==='1.png'){
    newImg.src = 'images/5.png';
    child3.src = 'images/1.png';
    nombreimg = '5.png';
    }else if(nombreimg === '5.png'){
        newImg.src = 'images/1.png';
        child3.src = 'images/5.png';
        nombreimg = '1.png';
    }
    imgBody.src = newImg.src;
})