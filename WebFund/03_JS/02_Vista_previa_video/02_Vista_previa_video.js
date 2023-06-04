console.log("page loaded...");

var x = document.getElementById("videogrande");

function over(){
    x.play();
    x.muted = true;
}

function out(){
    x.pause();
}
