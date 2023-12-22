const spans = document.querySelectorAll('.circle')
const divs =  document.querySelectorAll('.line')
const previewButon = document.getElementById('prew')
const befoButton = document.getElementById('bef')

befoButton.addEventListener('click', prewifuncion)
previewButon.addEventListener('click', brefofuncion)


function prewifuncion(){
    function obtenerUltimoElementoFill() {
        for (let i = spans.length - 1; i >= 0; i--) {
            const elemento = spans[i];
            if (elemento.id === 'fill') {
                return spans[i+1]
            }
        }
        return null; 
    }
    
    var newElemento = obtenerUltimoElementoFill()
    content = newElemento.textContent
    var linea
    if (content === '2') {
        linea = 0;
    } else if (content === '3') {
        linea = 1;
    } else if (content === '4') {
        linea = 2;
    } else {
        linea = 0;
    } 
    spans.forEach(item=>{
        if (content === item.textContent) {
            item.id = 'fill'
            divChange = document.getElementById(linea)
            divChange.style.backgroundColor = '#3498DB'
            item.style.boxShadow = '0px 0px 0px 4px #3498DB';
        }
    })
}

function brefofuncion(){
    function obtenerFill(){
        for (let i = spans.length - 1; i >= 0; i--) {
            const elemento = spans[i];
            if (elemento.id === 'fill') {
                return spans[i]
            }
        }
        return null;
    }
    var last = obtenerFill()
    last.style.boxShadow = '0px 0px 0px 4px gray';
    last.id = ''
    content = last.textContent
    console.log(content);
    var linea
    if (content === '2') {
        linea = 0;
    } else if (content === '3') {
        linea = 1;
    } else if (content === '4') {
        linea = 2;
    } else {
        linea = 0;
    } 
    reline = document.getElementById(linea)
    reline.style.backgroundColor = 'gray'
    
}
