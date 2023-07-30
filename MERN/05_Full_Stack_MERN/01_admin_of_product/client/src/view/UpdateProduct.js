import React, {useState,useEffect} from 'react'
import {useParams} from "react-router-dom";
import axios from 'axios'

const Updateproduct = () => {
// ---------------------------------------------
// I) VARIABLES & HOOKS
// ---------------------------------------------

const { id } = useParams();
const [title,setTitle]=useState("");
const [price,setPrice]=useState(0);
const [description,setDescription]=useState("");

// ---------------------------------------------
// II) HANDLERS & AUX FUNCTIONS
// ---------------------------------------------
useEffect(() => {
    axios.get(`http://localhost:8000/api/products/${id}`)
        .then(res => {
            setTitle(res.data.Product.title);
            setPrice(res.data.Product.price);
            setDescription(res.data.Product.description);
        })
}, [])



const handleUpdateSubmit=(e)=>{
    e.preventDefault();
    axios.put(`http://localhost:8000/api/products/${id}`,{
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
        <div className="container">
            <form className="container text-center" onSubmit={ handleUpdateSubmit }>
                <div className="input-group mb-3 d-flex flex-column align-content-center">
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
                    <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-primary">create</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Updateproduct