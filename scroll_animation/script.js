const container = document.getElementById('container')

document.addEventListener('DOMContentLoaded', ()=>{
    for (var i = 0; i < 3; i++) {
        createElement(i)
    }
    let contador = 3
    // move()
})
contador = 3
window.addEventListener('scroll',function(){
  let scrollPosition = window.scrollY;
  i = Math.round(scrollPosition)
  i = i/5
  if (i < 100) {
        createElement(contador)
        // move()
        contador+=1
  }
})



function createElement(i){
    console.log(i);
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
    move()
}


function move(){
    let izq = document.querySelectorAll('.elementD');
    izq.forEach(element => {
        let change = 500;
        let i = parseInt(element.id);
        if (i % 2 === 0){
            let trans = document.getElementById(`${i}`);
            let interval = setInterval(() => {
                if (change >= 0) {
                    trans.style.right = `${change}px`;
                    change-=6;
                } else {
                    clearInterval(interval); // Detiene la animación cuando change llega a 0
                }
            }, 1); // Intervalo de tiempo para la animación
        }else{
            let trans = document.getElementById(`${i}`)
            let interval = setInterval(() => {
                if (change >= 0) {
                    trans.style.left = `${change}px`;
                    change-=6;
                }else{
                    clearInterval(interval)
                }
            }, 1);
        }
    });
}
