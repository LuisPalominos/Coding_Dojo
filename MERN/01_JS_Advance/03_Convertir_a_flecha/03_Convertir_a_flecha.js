const getValueFromId =(id)=>{
    return $(id)[0].value;
}
const setBackgroundColorById=(id, color)=>{
    $(id)[0].style = "background-color: " + color;
}
const mouseOverFunction=(el)=>{
    let x= $("#color")[0].value
    el.style= "background-color: "+ x;
}
$(document).ready(()=> {
    $("#button").on("click", () => {setBackgroundColorById("#paragraph", "blue")});

    $("#alert").on("click",  () => {alert($("#popup-input")[0].value)});

    $("#hover-this").on("mouseover",  () => {setBackgroundColorById("body", "red")});

    $("#hover-this").on("mouseout",  () => {setBackgroundColorById("body", "white")});

    $("#task").on("mouseover",  () =>{mouseOverFunction()});
});


