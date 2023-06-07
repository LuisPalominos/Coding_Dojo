var cambioName = document.querySelector(".name");
var cambioRequest = [document.querySelector("#numero1"),document.querySelector("#numero2")];
var countRequest = [2,500];
var x = document.querySelector(".persona1");
var y = document.querySelector(".persona2");
function cambioNombre(){
    cambioName.innerText = "Luisa Rodriguez";
}

function add1() {
    countRequest[0]--;
    countRequest[1]++;
    cambioRequest[0].innerText = countRequest[0];
    cambioRequest[1].innerText = countRequest[1];
    x.remove();
}
function deny1() {
    countRequest[0]--;
    cambioRequest[0].innerText = countRequest[0];
    x.remove();
}
function add2() {
    countRequest[0]--;
    countRequest[1]++;
    cambioRequest[0].innerText = countRequest[0];
    cambioRequest[1].innerText = countRequest[1];
    y.remove();
}
function deny2() {
    countRequest[0]--;
    cambioRequest[0].innerText = countRequest[0];
    y.remove();
}