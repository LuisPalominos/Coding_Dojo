var displayDiv=document.querySelector("#display");
var num1=0;
var num2=0;
var sign=document.querySelector(".operator");
var signValue="";

function press(element){
    var number=element.innerText;
    if(displayDiv.innerText=="0"){
        displayDiv.innerText=number;
    }else{
        displayDiv.innerText=displayDiv.innerText+number;
    }
}
function setOP(element){
    signValue=element.innerText;
    num1=parseInt(displayDiv.innerText);
    displayDiv.innerText="0";
}
function calculate(){
    var result="";
    num2=parseInt(displayDiv.innerText);
    if(signValue=="÷"){
        result=num1/num2;
        displayDiv.innerText=result;
    } else if (signValue=="×"){
        result=num1*num2;
        displayDiv.innerText=result;
    } else if (signValue=="−"){
        result=num1-num2;
        displayDiv.innerText=result;
    } else if (signValue=="+"){
        result=num1+num2;
        displayDiv.innerText=result;
    }
}
function clr(){
    displayDiv.innerText="0";
    num1=0;
    num2=0;
}