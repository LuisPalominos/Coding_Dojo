document.getElementById("button").onclick=() => {
    setBackgroundColorById("paragraph", "blue");
}
document.getElementById("alert").onclick = () => {
    alert(document.getElementById("popup-input").value);
}
document.getElementById("hover-this").onmouseover = () => {
    setBackgroundColorById("body", "red");
}
document.getElementById("hover-this").onmouseout = () => {
    setBackgroundColorById("body", "white");
}
function getValueFromId(id){
    return document.getElementById(id).value;
}
function setBackgroundColorById(id, color){
    document.getElementById(id).style = "background-color: " + color;
}
document.getElementById("task").onclick = () =>{
    mouseOverFunction();
}
function mouseOverFunction(el){
    let x= document.getElementById("color").value
    el.style= "background-color: "+ x;
}