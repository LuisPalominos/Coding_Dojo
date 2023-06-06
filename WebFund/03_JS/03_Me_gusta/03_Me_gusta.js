// var count1 = 0;
// var count2 = 0;
// var count3 = 0;
// var countLike1 = document.querySelector("#number1");
// var countLike2 = document.querySelector("#number2");
// var countLike3 = document.querySelector("#number3");

var count=[0,0,0]
var countlike = [document.querySelector("#number1"),document.querySelector("#number2"),document.querySelector("#number3")];

function add1() {
    count[0]++;
    countlike[0].innerText = count[0] + " like(s)";
    console.log(count);
}
function add2() {
    count[1]++;
    countlike[1].innerText = count[1] + " like(s)";
    console.log(count);
}
function add3() {
    count[2]++;
    countlike[2].innerText = count[2] + " like(s)";
    console.log(count);
}