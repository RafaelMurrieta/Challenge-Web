var card_N = document.querySelectorAll(".card")

card_N.forEach(card=>{
    card.addEventListener('click', function(){
        if (card.id != "select") {
        var widthO = card.offsetWidth
        card.style.width = widthO*5 +"px"
        card.id = "select"
        card_N.forEach(card_W =>{
        var witdhI = card_W.offsetWidth;
        if (witdhI != widthO) {
            card_W.style.width = widthO +"px"
            card_W.id = null
        }
        })
    }
    })
})