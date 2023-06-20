var horas=document.querySelector("#hour");
var minutos=document.querySelector("#minutes");
var segundos=document.querySelector("#seconds");

function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() + 
    new Date().getMinutes() * 60 + 
    new Date().getHours() * 3600;
}
function agujaHora(element) {
    var hora=0;
    element %= 43200;
    hora=((360 * element / 43200) + 180) % 360;
    return hora;
}

function agujaMinuto(element) {
    var minuto=0;
    element %= 3600;
    minuto=((6 * element / 60) + 180) % 360;
    return minuto;
}

function agujaSegundo(element) {
    var segundo=0;
    element %= 60;
    segundo=((6 * element) + 180) % 360;
    return segundo;
}

setInterval(function() {
    var time = getSecondsSinceStartOfDay();
    horas.style.transform="rotate(  deg)"

    }, 1000);
