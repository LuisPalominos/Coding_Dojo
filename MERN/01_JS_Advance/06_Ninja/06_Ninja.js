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
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();