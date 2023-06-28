const pokemon = Object.freeze([
        { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
        { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
        { "id": 9,   "name": "Blastoise",  "types": ["water"] },
        { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
        { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
        { "id": 23,  "name": "Ekans",      "types": ["poison"] },
        { "id": 24,  "name": "Arbok",      "types": ["poison"] },
        { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
        { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
        { "id": 52,  "name": "Meowth",     "types": ["normal"] },
        { "id": 63,  "name": "Abra",       "types": ["psychic"] },
        { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
        { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
        { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
        { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
        { "id": 98,  "name": "Krabby",     "types": ["water"] },
        { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
        { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
        { "id": 133, "name": "Eevee",      "types": ["normal"] },
        { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
        { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
        { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
        { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
    ]);
console.log("----------------------------------------------");
const pkmnIds = pokemon.filter(
    (p) => {
        return p.id % 3 == 0
    }
    );
console.log(pkmnIds);
console.log("----------------------------------------------");
const firetype = pokemon.filter(
    (p)=>{
        return (p.types[0]=="fire")+(p.types[1]=="fire");
    }
);
console.log(firetype);
console.log("----------------------------------------------");
const twotypes = pokemon.filter(
    (p)=>{
        if(p.types[1]!=null){
            return p;
        }
    }
);
console.log(twotypes);
console.log("----------------------------------------------");
const pkname = pokemon.map(
    (p)=>{
        return p.name;
    }
);
console.log(pkname);
console.log("----------------------------------------------");
const pknameMayor = pokemon.filter(
    (p)=>{
        if(p.id>99){
            return p;
        }
    }
).map(
    (p)=>{
        return p.name;
    }
);
console.log(pknameMayor);
console.log("----------------------------------------------");
const poison = pokemon.filter(
    (p)=>{
        if(p.types[0]=="poison" && p.types[1]==null){
            return p;
        }
    }
).map(
    (p)=>{
        return p.name;
    }
);
console.log(poison);
console.log("----------------------------------------------");
const flying = pokemon.filter(
    (p)=>{
        if(p.types[1]=="flying"){
            return p;
        }
    }
).map(
    (p)=>{
        return p.types[0];
    }
);
console.log(flying);
console.log("----------------------------------------------");
const normal = pokemon.filter(
    (p)=>{
        if(p.types[0]=="normal" || p.types[1]=="normal"){
            return p;
        }
    }
).map(
    (p)=>{
        return p.name;
    }
);
console.log(normal);