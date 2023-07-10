import React from 'react'

const Cartas = (props) => {
// ---------------------------------------------
// I) VARIABLES & HOOKS
// ---------------------------------------------



// ---------------------------------------------
// II) HANDLERS & AUX FUNCTIONS
// ---------------------------------------------


// ---------------------------------------------
// III) JSX
// ---------------------------------------------

    return (
        <div className="container d-flex flex-column align-items-center">
            <h1 className='col-3 ms-5 ps-5 fs-2 fw-bold '>{props.LastName}, {props.FirstName}</h1>
            <p className='col-3 ms-5 ps-5'>Age: {props.age}</p>
            <p className='col-3 ms-5 ps-5'>Hair Color: {props.hairColor}</p>
            <hr className="w-50 mx-auto"/>
        </div>
    )
}


export default Cartas