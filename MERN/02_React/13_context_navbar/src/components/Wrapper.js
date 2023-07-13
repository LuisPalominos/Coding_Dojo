import React, {useState} from 'react'
import MyContext from '../context/MyContext';

const Wrapper = ({children}) => {
// ---------------------------------------------
// I) VARIABLES & HOOKS
// ---------------------------------------------
    const [name, setName]=useState();


// ---------------------------------------------
// II) HANDLERS & AUX FUNCTIONS
// ---------------------------------------------


// ---------------------------------------------
// III) JSX
// ---------------------------------------------
    return (
        <div>
            <MyContext.Provider value={{name, setName}}>
                {children}
            </MyContext.Provider>
        </div>
    );
}

export default Wrapper