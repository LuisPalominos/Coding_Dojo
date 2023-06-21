// --------------1-----------------

var hello;
console.log(hello);
hello = 'world';
// log debe ser undefined                               

// --------------2-----------------

var needle;
function test(){
    var needle;
    needle = 'magnet';
    console.log(needle);
}
var needle = 'haystack';
test();
// la funcion se eleva se deberia logiar "magnet"

// --------------3-----------------

var brendan;
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
brendan = 'super cool';
console.log(brendan);
// la variable brendan cambia al valor "super cool" antes de ser logeado

// --------------4-----------------

var food;
function eat(){
    var food;
    food = 'half-chicken';
    console.log(food);
    food = 'gone';
}
food = 'chicken';
console.log(food);
eat();
// la variable global food cambia da valor a "chicken" antes de ser logiada y luego se llama a la funcion en la cual la variable local food cambia de valor a "half-chicken" antes de ser logiado ignorando el resto que sigue

// --------------5-----------------

var mean;
mean();
console.log(food);
mean = function() {
    var food;
    food = "chicken";
    console.log(food);
    food = "fish";
    console.log(food);
    }
console.log(food);
// se llama a la funcion mean antes de que la variable mean se le de como valor una funcion por lo tanto la consola manda un mensaje de error de que mean no es una funcion definida

// --------------6-----------------

var genre;
function rewind() {
    var genre;
    genre = "rock";
    console.log(genre);
    genre = "r&b";
    console.log(genre);
}
console.log(genre);
genre = "disco";
rewind();
console.log(genre);
// se trata de logear la variable global genre antes de dalor un valor por lo que primero aperece en la consola es "undefined" luego la funcion (elevada) eleva la variable local genre y logea primero "rock" y luego "r&b" y finalmente ya fure de la funcion se logea la variable global genre con el valor de "disco"

// --------------7-----------------

function learn() {
    var dojo;
    dojo = "seattle";
    console.log(dojo);
    dojo = "burbank";
    console.log(dojo);
}
dojo = "san jose";
console.log(dojo);
learn();
console.log(dojo);
// la funcion learn se eleva al principio del codigo luego se define dojo = "san jose" y se logea "san jose" despues se llama a la funcion leran la cual eleva la variable local dojo al principio de esta funcion luego se define el valor de esta variable local como "seattle" y se logea en la consola luego dojo pasa a tener un valor de "burbank" y se logea en la consola ya luego fuera de la consola se vuelve a logear de manera global "san jose"

// --------------8-----------------

function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));

// primero eleva la funcion arriba del codigo luego entra el primer console.log dando el sigiente objeto {name: 'Chicago', students: 65, hiring: true} y luego en el segundo console.log manda error por intentar cambiar el valor de un const
