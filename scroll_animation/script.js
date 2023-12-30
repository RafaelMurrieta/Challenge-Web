const container = document.getElementById('container')

document.addEventListener('DOMContentLoaded', ()=>{
    for (let i = 0; i < 3; i++) {
        ElementDiv = document.createElement('div')
        spanD = document.createElement('span')
        spanD.textContent = 'Content'
        ElementDiv.className = 'elementD'
        ElementDiv.appendChild(spanD)
        container.appendChild(ElementDiv)
    }
})
{/* <div class="elementD"></div> */}