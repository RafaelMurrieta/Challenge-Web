function actualizarReloj(){
    var time = new Date()
    var hours = time.getHours()
    var minuts = time.getMinutes()
    var seconds = time.getSeconds()

    minuts = minuts < 10 ? "0"+minuts: minuts
    seconds = seconds < 10 ? "0" :seconds
    hours = hours <10 ? "0"+hours : hours
    
    
    ampm = hours < 12 ? "AM" : "PM"

    var hora = hours + ":" + minuts  + ":"+ seconds
    
    document.getElementById("times").textContent = hora
    document.getElementById("time").textContent = ampm

    setInterval(actualizarReloj,1000)
}

actualizarReloj()