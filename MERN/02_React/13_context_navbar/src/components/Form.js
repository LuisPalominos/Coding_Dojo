import React, {useContext }from 'react'
import MyContext from '../context/MyContext';

const Form = () => {
// ---------------------------------------------
// I) VARIABLES & HOOKS
// ---------------------------------------------
const { name, setName } = useContext(MyContext);

// ---------------------------------------------
// II) HANDLERS & AUX FUNCTIONS
// ---------------------------------------------
const handleonChange=(e)=>{
    setName(e.target.value);
};

// ---------------------------------------------
// III) JSX
// ---------------------------------------------
    return (
        <div className= 'container col-3'>
            <form>
                <span className="input-group-text" id="inputGroup-sizing-default">Your Name:</span>
                <input type="text" name='name' value={name} onChange={  handleonChange } className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
            </form>
        </div>
    )
}

export default Form