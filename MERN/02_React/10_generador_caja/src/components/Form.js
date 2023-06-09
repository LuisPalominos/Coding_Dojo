import React, {useState} from 'react'

const Form = (props) => {
// ---------------------------------------------
// I) VARIABLES & HOOKS
// ---------------------------------------------
const {inputs, setInputs} = props;
const [color, setColor] = useState("");
const [formData, setFormData] = useState({
    name: ''
});

// ---------------------------------------------
// II) HANDLERS & AUX FUNCTIONS
// ---------------------------------------------
const  handleChange=(e)=>{
    setColor(e.target.value);
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });
}

const handleSubmit=(e)=>{
    e.preventDefault();
    const newinputs =[...inputs];
    newinputs.push(color);
    setInputs(newinputs);
    setFormData({
        name: '',
    });
}
// ---------------------------------------------
// III) JSX
// ---------------------------------------------
    return (
        <div className='container col-3'>
                <form onSubmit={ handleSubmit }>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-default">Color</span>
                        <input type="text" name='name' value={formData.name} onChange={  handleChange } className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                        <button type="submit" className="btn btn-primary">Add</button>
                    </div>
                </form>
            </div>
    )
}

export default Form