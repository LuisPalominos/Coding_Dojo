import React, {useContext} from 'react'
import MyContext from '../context/MyContext';

const Navbar = () => {
// ---------------------------------------------
// I) VARIABLES & HOOKS
// ---------------------------------------------
    const { name} = useContext(MyContext);


// ---------------------------------------------
// II) HANDLERS & AUX FUNCTIONS
// ---------------------------------------------


// ---------------------------------------------
// III) JSX
// ---------------------------------------------
    return (
        <div className= 'container col-12 bg-primary text-white'> 
            <h1 className='text-center'>Hi {name} </h1>
        </div>
    )
}

export default Navbar