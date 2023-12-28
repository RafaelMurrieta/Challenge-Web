const bodyC = document.getElementById('container') 
const numbers = document.getElementById('numbers')

document.addEventListener('DOMContentLoaded', function(){
    for (let i = 100; i >= 0; i--) {
        ctext = numbers.textContent
        Number = ctext.split('%')
            setTimeout(() => {
                numbers.textContent = i+'%'
                    bodyC.style.filter = `blur(${i*10/40}px)` 
            },(99-i)*30);
    }     
     
})