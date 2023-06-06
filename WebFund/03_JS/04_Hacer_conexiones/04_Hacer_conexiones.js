var cambioName = document.querySelector(".name");
var cambioRequest = [document.querySelector("#numero1"),document.querySelector("#numero2")];
var countRequest = [2,500];

function cambioNombre(){
    cambioName.innerText = "Luisa Rodriguez";
}

function add() {
    countRequest[0]--;
    countRequest[1]++;
    cambioRequest[0].innerText = countRequest[0];
    cambioRequest[1].innerText = countRequest[1];
}
function deny() {
    countRequest[0]--;
    cambioRequest[0].innerText = countRequest[0];
}
function borrar(x){
    x.remove();
}