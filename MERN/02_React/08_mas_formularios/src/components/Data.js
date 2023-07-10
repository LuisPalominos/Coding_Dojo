import React from 'react'

const Data = (props) => {
// ---------------------------------------------
// I) VARIABLES & HOOKS
// ---------------------------------------------

    const {firstname, lastname, email, password, confirmPassword} = props.data;


// ---------------------------------------------
// II) HANDLERS & AUX FUNCTIONS
// ---------------------------------------------


// ---------------------------------------------
// III) JSX
// ---------------------------------------------

    return (
        <div className='container col-3'>
            <p className='text-center'>Your Form Data:</p>
            <p>Firstname: {firstname}</p>
            <p>Lastname: {lastname}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmPassword}</p>
        </div>
    )
}

export default Data