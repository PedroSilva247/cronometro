var time = document.querySelector("main#time1").innerText

function toseconds() {
    let minutes = time.substring(0,2)
    let seconds = time.substring(3,5)
    let totalSeconds = Number(minutes)*60+Number(seconds)
    return totalSeconds
}
function toMinutes(timeSec) {
    let minutes = Math.trunc(Number(timeSec)/60)
    let seconds = String(Number(timeSec)%60).length == 1 ?  "0" + String(Number(timeSec)%60): String(Number(timeSec)%60)
    let timeInMinute = String(minutes)+":"+seconds
    return timeInMinute
}


function play() {
    let timeInSeconds = toseconds()
    
    document.getElementById("botao").disabled = true
    setInterval(() => {
        timeInSeconds--
        
        document.querySelector("main#time1").innerText = toMinutes(timeInSeconds)
        if(timeInSeconds == 1149 || timeInSeconds < 1) {
            i()
        } else {
            g()
        }
        

    }, 10)
}

let sec = document.getElementById("sec")

function i() {
    let container = document.getElementById("container")
    container.style.backgroundColor = "#E5050F"
    sec.className = "inter"
    let titulo = document.getElementById("titulo")
    titulo.innerHTML = "INTER MAIOR DO SUL"
}
function g() {
    let container = document.getElementById("container")
    container.style.backgroundColor = "#0e95dd"
    sec.className = "gremio"
    titulo.innerHTML = "Cronômetro"
}
