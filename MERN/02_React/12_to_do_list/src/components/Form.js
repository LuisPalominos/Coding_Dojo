import React, {useState} from 'react'

const Form = (props) => {
// ---------------------------------------------
// I) VARIABLES & HOOKS
// ---------------------------------------------
const {inputs, setInputs} = props;
const [list, setlist] = useState([]);

// ---------------------------------------------
// II) HANDLERS & AUX FUNCTIONS
// ---------------------------------------------
const  handleChange=(e)=>{
    const{name,value}=e.target;
    setlist([{...list,[name]:value, status: false}]);
}

const handleSubmit=(e)=>{
    e.preventDefault();
    const newinputs =[...inputs];
    newinputs.push(...list);
    setInputs(newinputs);
}
// ---------------------------------------------
// III) JSX
// ---------------------------------------------
    return (
        <div className='container col-3'>
                <form onSubmit={ handleSubmit }>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-default">tarea</span>
                        <input type="text" name='name'  onChange={  handleChange } className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                        <button type="submit" className="btn btn-primary">Add</button>
                    </div>
                </form>
            </div>
    )
}

export default Form