// --------------Siempre hambirento------------------

// var count="";
// function siempreHambriento(arr){
//     for(i=0;i<arr.length;i++){
//         if(arr[i]=="comida" && count=="Tengo hambre"){
//             count="";
//             count+="delicioso";
//         } else if(arr[i]=="comida"){
//             count+=" delicioso";
//         }
//         else if(arr[i]!=="comida" && count==""){
//             count="Tengo hambre";
//         }
//     }
// }
// siempreHambriento([3.14,"comida","pastel",true,"comida"]);
// console.log(count);
// siempreHambriento([4,1,5,7,2]);
// console.log(count);

// -----------Filtro paso alto-----------------

// function highPass(arr,cutoff){
//     var filteredArr=[];
//     for(i=0;i<arr.length;i++){
//         if(arr[i]>cutoff){
//             filteredArr.push(arr[i]);
//         }
//     }
//     return filteredArr;
// }
// var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
// console.log(result);

// -------------------Mejor que el promedio-------------------

// function betterThanAverage(arr) {
//     var sum = 0;
//     for (j=0;j<arr.length;j++){
//         sum+=arr[j]/arr.length;
//     }
//     var count = 0
//     for (i=0;i<arr.length;i++){
//         if(arr[i]>sum){
//             count++
//         }
//     }
//     return count;
// }
// var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
// console.log(result);

// ------------------------Arreglo invertido-------------------------

// function reverse(arr) {
//     var a=[];
//     for (i=0;i<arr.length;i++){
//         a.push(arr[(arr.length-1)-i])
//     }
//     return a;
// }
// var result = reverse(["a", "b", "c", "d", "e"]);
// console.log(result);

// -----------------------Arreglo de Fibonacci------------------

// function fibonacciArray(n) {
//     var numero=0;
//     var fibArr = [0, 1];
//     for (i=0;i<n-2;i++){
//         numero=fibArr[fibArr.length-1]+fibArr[fibArr.length-2];
//         fibArr.push(numero);
//     }
//     return fibArr;
// }   
// var result = fibonacciArray(14);
// console.log(result);
