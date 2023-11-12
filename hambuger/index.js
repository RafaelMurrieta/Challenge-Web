const ambuger = document.getElementById('ambuger');
const bodyMenu = document.getElementById('items-body')
const containerAmbuger = document.getElementById('container-ambuger')
const imagen = document.getElementById('body-img')
var span = document.getElementsByClassName('ambuger-span');
var body = document.body;
var item = document.querySelectorAll('.item-option')
const itemHome = document.getElementById('item-home');
const itemAbout = document.getElementById('item-About')

ambuger.addEventListener('change',function(){
var modo = localStorage.getItem("mode")
console.log(modo);
    if(modo === 'active'){
        bodyMenu.style.display = 'flex'
        containerAmbuger.style.display = 'flex'
        containerAmbuger.style.background = 'white'
        body.style.background = 'black'
        imagen.style.display = 'block'
    for (let i = 0; i < span.length; i++) {
        span[i].style.background = 'black'
    }
        localStorage.setItem("mode", "deactivated")
    }else if(modo === 'deactivated'){
        containerAmbuger.style.background = 'black'
        bodyMenu.style.display = 'none'
        body.style.background = '#f5f5f5'
        for (let i = 0; i < span.length; i++) {
            span[i].style.background = 'white'
        }
        imagen.style.display = 'none'  
        localStorage.setItem("mode", "active")
    console.log(modo);

    }
});

item.forEach(Element => {
    Element.addEventListener('click', function() {
        var section = Element.textContent
        console.log(section);
        switch (section) {
            case "Home":
                body.style.background = '#826251'
                break;
            case "About":
                body.style.background = '#E9B44C'
                break;
            case "Services":
                body.style.background = '#73AFFF'
                break;
            case "Portafolio":
                body.style.background = "#DA8C58"
                break;
            case "Team":
                body.style.background = "#DACDFF"
                break;
            case "Contact":
                body.style.background = '#DA8C58'
                break;
            default:
                body.style.background = "black"
            break;
        }
        Element.style.opacity = "1"
        item.forEach(newelement => {
            if (newelement != Element) {
                newelement.style.opacity = "0.5"
            }

        });
    });
});
