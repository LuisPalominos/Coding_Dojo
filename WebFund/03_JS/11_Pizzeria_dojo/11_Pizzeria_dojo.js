function pizzaOven(tipoCorteza, tiposalsa, quesos, salsas) {
    var pizza = {};
    pizza.tipoCorteza = tipoCorteza;
    pizza.tiposalsa = tiposalsa;
    pizza.quesos = quesos;
    pizza.salsas = salsas;
    return pizza;
}
    
var s1 = pizzaOven("estilo chicago", "tradicional", ["mozzarella"], ["pepperoni", "salchicha",]);
var s2 = pizzaOven("lanzada a mano", "marinara", ["mozzarella", "feta"], ["champiñones", "aceitunas", "cebollas"]);
var s3 = pizzaOven("grueza", "marinara", ["mozzarella", "queso azul"], ["rucula", "choclo", "tomates"]);
var s4 = pizzaOven("fina", "tradicional", ["mozzarella"], ["salame", "jamon", "pollo"]);
console.log(s1);
console.log(s2);
console.log(s3);
console.log(s4);