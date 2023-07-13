import React from 'react'

const Moneda = () => {
// ---------------------------------------------
// I) VARIABLES & HOOKS
// ---------------------------------------------


// ---------------------------------------------
// II) HANDLERS & AUX FUNCTIONS
// ---------------------------------------------
    function tossCoin() {
            return Math.random() > 0.5 ? "heads" : "tails";
        }

    function fiveHeads() {
        return new Promise( (resolve, reject) => {
            let headsCount = 0;
            let attempts = 0;
            while(headsCount < 5) {
                attempts++;
                let result = tossCoin();
                console.log(`${result} was flipped`);
                if(result === "heads") {
                    headsCount++;
                } else {
                    headsCount = 0;
                }
            }
            if(headsCount === 5 && attempts<=100) {
                resolve(`It took ${attempts} tries to flip five "heads"`);
            } else{
                reject("Failed to flip five consecutive heads");
            }
        });
    }
    fiveHeads()
        .then( res => console.log(res) )
        .catch( err => console.log(err) );
    console.log( "When does this run now?" );


// ---------------------------------------------
// III) JSX
// ---------------------------------------------
    return (
        <div>Moneda</div>
    )
}

export default Moneda
