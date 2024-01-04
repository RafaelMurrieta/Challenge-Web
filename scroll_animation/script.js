const container = document.getElementById('container')

document.addEventListener('DOMContentLoaded', ()=>{
    for (var i = 0; i < 3; i++) {
        createElement(i)
        move(i)
    }
    let contador = 3
})


contador = 3
window.addEventListener('scroll',function(){
  let scrollPosition = window.scrollY;
  i = Math.round(scrollPosition)
  if (i < 130) {
    createElement(contador)
    move(contador)
    contador+=1
  }
})



function createElement(i){
    ElementDiv = document.createElement('div')
    spanD = document.createElement('span')
    spanD.textContent = 'Content'
    ElementDiv.id = i
    ElementDiv.className = 'elementD'
    if (i%2==0) {
        ElementDiv.style.right = '500px'
    }else{
        ElementDiv.style.left = '500px'
    }
    ElementDiv.appendChild(spanD)
    container.appendChild(ElementDiv)
}


function move(id){
    if (id % 2 == 0) {
        setTimeout(() => {
            trans = document.getElementById(`${id}`)
            trans.className = 'zero'
            trans.style.right = '0px'
        }, 100);
    }else{
        setTimeout(() => {
            trans = document.getElementById(`${id}`)
            trans.className = 'zeroI'
            trans.style.left = '0px'
        }, 100);
    }
}

