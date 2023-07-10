import React, {useState} from 'react'

const Cards = (props) => {
// ---------------------------------------------
// I) VARIABLES & HOOKS
// ---------------------------------------------
let [Count, setCount] = useState(props.age);


// ---------------------------------------------
// II) HANDLERS & AUX FUNCTIONS
// ---------------------------------------------
const handleOnClick = () =>{
    let newcount=Count +1;
    setCount(newcount); 
    }

// ---------------------------------------------
// III) JSX
// ---------------------------------------------

    return (
        <div className="container d-flex flex-column align-items-center">
            <h1 className='col-3 ms-5 ps-5 fs-2 fw-bold '>{props.LastName}, {props.FirstName}</h1>
            <p id='age' className='col-3 ms-5 ps-5'>Age: {Count}</p>
            <p className='col-3 ms-5 ps-5'>Hair Color: {props.hairColor}</p>
            <button  type="button" className="btn btn-primary" onClick={handleOnClick}>Birthday Button of {props.FirstName} {props.LastName}</button>
            <hr className="w-50 mx-auto"/>
        </div>
    )
}


export default Cards