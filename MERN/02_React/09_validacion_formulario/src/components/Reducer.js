import React, { useReducer } from 'react';

const Reducer=()=>{
// ---------------------------------------------
// I) VARIABLES & HOOKS
// ---------------------------------------------
const initialState = {
    firstName: {
        value: '',
        error: null
    },
    lastName: {
        value: '',
        error: null
    },
    email: {
        value: '',
        error: null
    }
};
const reducer=(state, action)=> {
    return {
        ...state,
        [action.error]: action.value
    };
}
const [state, dispatch] = useReducer(reducer, initialState);

// ---------------------------------------------
// II) HANDLERS & AUX FUNCTIONS
// ---------------------------------------------
const handleChange=(e)=> {
    const { value, error } = e.target;
    dispatch({
        value: value,
        error: error
    });

    if (e.target.value.length<1){
        alert("You have entered an invalid email address!")
        return (
            e.error=undefined
        );
    } else{
        return (
            e.error=null
        );
    }
}
// ---------------------------------------------
// III) JSX
// ---------------------------------------------
    
    return (
        <div className='container col-3'>
            {JSON.stringify(state)}
            <form>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Firstname</span>
                    <input type="text" name='firstname' value={state.name} onChange={ handleChange } className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Lastname</span>
                    <input type="text" name='lastname' value={state.name} onChange={ handleChange } className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Email</span>
                    <input type="email" name='email' value={state.name} onChange={ handleChange } className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                </div>
                <div>{state.email.error !== null ?<p className="error">{state.email.error}</p> :''}</div>
            </form>
        </div>
    );
}



export default Reducer


