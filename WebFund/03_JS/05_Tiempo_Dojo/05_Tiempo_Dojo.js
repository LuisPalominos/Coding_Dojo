var x = document.querySelector(".cookies");
var y = document.querySelector("#temperature");
var rojo = [document.querySelector(".rojo1"),document.querySelector(".rojo2"),document.querySelector(".rojo3"),document.querySelector(".rojo4")];
var azul = [document.querySelector(".azul1"),document.querySelector(".azul2"),document.querySelector(".azul3"),document.querySelector(".azul4")];
function borrar(){
    x.remove();
}

function alerta(){
    alert("Cargando informe meteorológico...");
}
function cambio(){
    if (y.value=="°F"){
        rojo[0].innerText = "75°";
        rojo[1].innerText = "80°";
        rojo[2].innerText = "69°";
        rojo[3].innerText = "78°";
        azul[0].innerText = "65°";
        azul[1].innerText = "66°";
        azul[2].innerText = "61°";
        azul[3].innerText = "70°";
        
    } else{
        rojo[0].innerText = "24°";
        rojo[1].innerText = "27°";
        rojo[2].innerText = "21°";
        rojo[3].innerText = "26°";
        azul[0].innerText = "18°";
        azul[1].innerText = "19°";
        azul[2].innerText = "16°";
        azul[3].innerText = "21°";
    }
}