import React from 'react'

const Button = (props) => {
// ---------------------------------------------
// I) VARIABLES & HOOKS
// ---------------------------------------------
    const {inputs, setInputs} = props;


// ---------------------------------------------
// II) HANDLERS & AUX FUNCTIONS
// ---------------------------------------------
    const onClickHandler = (inputKey) => {
        setInputs((prevInputs) => {
            const newInputs={...prevInputs};
            Object.keys(newInputs).forEach((key) => {
                newInputs[key].push = key === inputKey;
            });
            return newInputs;
            });
        console.log(inputs);
    }
// ---------------------------------------------
// III) JSX
// ---------------------------------------------
    return (
        <div className='container text-center'>
            {Object.keys(inputs).map(inputKey=>
            <button key={inputKey} 
            onClick={()=>onClickHandler(inputKey)}
            className={`btn btn-primary ${inputs[inputKey].push ? 'active' : ''}`}
            >{inputs[inputKey].name}</button>
    )}
        </div>
    )
}

export default Button