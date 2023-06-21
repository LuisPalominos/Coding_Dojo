// --------------1-----------------

const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
// console.log(randomCar) logeara el primer string de la constante "cars" en este caso es "Tesla" y console.log(otherRandomCar) logeara el segundo string de la constante "cars" o sea "Mercedes"
console.log(randomCar)
console.log(otherRandomCar)

// --------------2-----------------

// const employee = {
//     name: 'Elon',
//     age: 47,
//     company: 'Tesla'
// }
// const { name: otherName } = employee;
// //el valor de name en el objeto employee se almacena en la constatnte otherName por lo tanto se produce un error al tratar de logear name ya que esta no esta definida como variable
// console.log(name);
// console.log(otherName);

// --------------3-----------------

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//console.log(password) logeara el valor de la constatnte pasword de "12345" mientras que console.log(hashedPassword); logeara undefined ya que password no forma parte del objeto person
console.log(password);
console.log(hashedPassword);

// --------------4-----------------

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//estos console.log estan viendo que el valor asignado a first sea igual al valor asignado a second y thord por lo que arrojaran un booleano, en el primer caso ya que first toma el indice 1 en el arreglo toma el valor de 2 mientres que second toma el indice 3 tomando el valor de 5 por lo tanto el false, en el segundo caso third toma el indice 8 tomando el valor de 2 por lo tanto es true
console.log(first == second);
console.log(first == third);

// --------------5-----------------

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//console.log(key) toma el valor de key en el objeto lastTest y la almacena en la constante key arrojando el valor de "Value", console.log(secondKey) toma el valor de secondkey en el objeto lastTest y la almacena en la constante secondkey arrojando el valor del arreglo [1, 5, 1, 8, 3, 3] asi mismo console.log(secondKey[0]) arroja el indice 0 de este arreglo de valor 1, console.log(willThisWork); toma el indice 1 del arreglo almacenado en la constante secondkey y la almacena en la nueva constante willThisWork para luego arrojar el valor de 5
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);

