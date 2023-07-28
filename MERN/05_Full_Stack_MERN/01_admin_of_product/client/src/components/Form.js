import React, {useState} from 'react'
import axios from 'axios'

const Form = () => {
// ---------------------------------------------
// I) VARIABLES & HOOKS
// ---------------------------------------------

const [title,setTitle]=useState("");
const [price,setPrice]=useState(0);
const [description,setDescription]=useState("");

// ---------------------------------------------
// II) HANDLERS & AUX FUNCTIONS
// ---------------------------------------------




const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post('http://localhost:8000/api/products',{
        title,
        price,
        description
    })
        .then((response)=>{
            console.error(response);
        })
        .catch((error) => {
                console.error(error);
            });
}

// ---------------------------------------------
// III) JSX
// ---------------------------------------------
    return (
        <div>
            <form onSubmit={ handleSubmit }>
                <div className="input-group mb-3">
                    <div>
                        <span className="input-group-text" id="inputGroup-sizing-default">Title</span>
                        <input type="text" name='title'  onChange={  (e) => setTitle(e.target.value) } className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                    </div>
                    <div>
                        <span className="input-group-text" id="inputGroup-sizing-default">Price</span>
                        <input type="text" name='price'  onChange={  (e) => setPrice(e.target.value) } className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                    </div>
                    <div>
                        <span className="input-group-text" id="inputGroup-sizing-default">Description</span>
                        <input type="text" name='description'  onChange={  (e) => setDescription(e.target.value) } className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary">create</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Form