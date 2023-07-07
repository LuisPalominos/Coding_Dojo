import React, {useState} from 'react'
import Cards from './Cards'


const Button = () => {
// ---------------------------------------------
// I) VARIABLES & HOOKS
// ---------------------------------------------

let [Count, setCount] = useState(Cards.age);

// ---------------------------------------------
// II) HANDLERS & AUX FUNCTIONS
// ---------------------------------------------

const handleOnClick = (e) =>{
    console.log(Count);
    let newcount=Count +1;
    console.log(Count);
    setCount(newcount);
}

// ---------------------------------------------
// III) JSX
// ---------------------------------------------


    return (
        <div className="container d-flex flex-column align-items-center">
            <button type="button" className="btn btn-primary" onClick={handleOnClick}>Birthday Button</button>
        </div>
    )
}

export default Button