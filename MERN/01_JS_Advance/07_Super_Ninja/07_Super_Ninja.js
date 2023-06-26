class Ninja {
    constructor(Name) {
        this.Name = Name;
        this.Health = 100;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        console.log(`your name is ${this.Name}`);
    }
    showStats (){
        console.log(`your Stats are Name: ${this.Name}, Health: ${this.Health}, Speed: ${this.speed}, Strength: ${this.strength}`);
    }
    drinkSake(){
        this.Health +=10;
    }
}
class Sensei extends Ninja {
    constructor(Name) {
        super(Name);
        this.Health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }
    speakWisdom() {
        super.drinkSake();
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.");
    }
}
const superSensei = new Sensei("Master Splinter");
superSensei.showStats();
superSensei.speakWisdom();
superSensei.showStats();
