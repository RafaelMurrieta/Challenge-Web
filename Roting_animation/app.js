const bottonUp = document.getElementById('button-menu')
const contenedor = document.getElementById('container')
const bottonClose = document.getElementById('button-close')
const elemnt = document.getElementById('elements')


bottonUp.addEventListener('click', ()=>{
    bottonUp.style.translate = '20px -80px';
    contenedor.style.transform = 'rotate(-20deg)';
    bottonClose.style.position = 'fixed'
    bottonClose.style.translate = '60px -20px'
    elemnt.style.translate = '100px -20px'
})

bottonClose.addEventListener('click', ()=>{
    bottonUp.style.translate = '';
    elemnt.style.translate = ''
    contenedor.style.transform = 'rotate(0deg)';
    bottonClose.style.position = 'none'
    bottonClose.style.translate = '-60px 20px'

})