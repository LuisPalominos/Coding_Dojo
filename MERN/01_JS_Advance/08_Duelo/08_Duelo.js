class Card {
    constructor(name,cost){
        this.name=name;
        this.cost=cost;
    }
}
class Unit extends Card{
    constructor(name,cost,power,res){
        super(name,cost);
        this.power=power;
        this.res=res;
    }
    attack(target){
        if( target instanceof Unit ) {
            target.res-=this.power;
            if(target.res>0){
                target.res=target.res;
            } else if(target.res<=0){
                target.res="murio";
            }
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }           
}
class Effect extends Card{
    constructor(name,cost,text,stat,magnitud){
        super(name,cost);
        this.text=text;
        this.stat=stat;
        this.magnitud=magnitud;
    }
    play( target ) {
        if( target instanceof Unit ) {
            if (this.stat=="Resiliencia"){
                target.res+=this.magnitud;
            } else if (this.stat=="Poder"){
                target.power+=this.magnitud;
            }
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}
let Rojo = new Unit("Ninja Cinturón Rojo",3,3,4);
let Negro = new Unit("Ninja Cinturón Negro",4,5,4);
let Algoritmo = new Effect("Algoritmo Difícil",2,"aumentar la resistencia del objetivo en 3","Resiliencia",3);
let Rechazo = new Effect("Rechazo de promesa no manejado",1,"reducir la resistencia del objetivo en 2","Resiliencia",-2);
let Programación = new Effect("Programación en pareja",3,"aumentar el poder del objetivo en 2","Poder",2);
// --------------comienza el juego------------------

console.log("Jugador 1 usa ");
console.log(Rojo);
Algoritmo.play(Rojo);
console.log("Jugador 1 usa Algoritmo Difícil ");
console.log(Rojo);
console.log("jugador 2 usa ");
console.log(Negro);
Rechazo.play(Rojo);
console.log("jugador 2 usa Rechazo de promesa no manejado ");
console.log(Rojo);
Programación.play(Rojo);
console.log("Jugador 1 usa Programación en pareja ");
console.log(Rojo);
Rojo.attack(Negro);
console.log("juagdor 1 ataco unidad de jugador 2");
console.log(Negro);
console.log("gana jugador 1");