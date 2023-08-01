import React, {useState,useEffect} from 'react'
import axios from 'axios'


const Form = () => {
// ---------------------------------------------
// I) VARIABLES & HOOKS
// ---------------------------------------------

const [title,setTitle]=useState("");
const [price,setPrice]=useState(0);
const [description,setDescription]=useState("");

const [reload, setReload] = useState(false);
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
            setReload(true);
        })
        .catch((error) => {
                console.error(error);
            });
}

useEffect(() => {
    if (reload) {
        window.location.reload();
        setReload(false);
    }
}, [reload]);
// ---------------------------------------------
// III) JSX
// ---------------------------------------------
    return (
        <div className="container">
            <h1>Product Manager</h1>
            <form className="container text-center" onSubmit={ handleSubmit }>
                <div className="input-group mb-3 d-flex flex-column align-content-center">
                    <div className="m-3">
                        <span className="input-group-text" id="inputGroup-sizing-default">Title</span>
                        <input type="text" name='title'  onChange={  (e) => setTitle(e.target.value) } className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                    </div>
                    <div className="m-3">
                        <span className="input-group-text" id="inputGroup-sizing-default">Price</span>
                        <input type="text" name='price'  onChange={  (e) => setPrice(e.target.value) } className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                    </div>
                    <div className="m-3">
                        <span className="input-group-text" id="inputGroup-sizing-default">Description</span>
                        <input type="text" name='description'  onChange={  (e) => setDescription(e.target.value) } className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-primary">create</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Form