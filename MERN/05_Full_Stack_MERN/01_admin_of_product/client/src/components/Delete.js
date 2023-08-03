import React from 'react'
import axios from 'axios';
import {useNavigate } from "react-router-dom";

const Delete = (props) => {
// ---------------------------------------------
// I) VARIABLES & HOOKS
// ---------------------------------------------

const navigate = useNavigate();
const { product,productid,removeFromDom } = props;
// ---------------------------------------------
// II) HANDLERS & AUX FUNCTIONS
// ---------------------------------------------
const handleOnClick = (e) => {

    if (product) {
        deleteProduct(product._id);
    }
    else {
        deleteProduct(productid);
    }
};

const deleteProduct = (id) => {
    axios.delete(`http://localhost:8000/api/products/${id}`)
        .then((response)=>{
            if(id===productid){
                navigate('/');
            } else {
                removeFromDom(id);
            }   
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
            <button type="button" className="btn btn-primary" onClick={(e)=>{handleOnClick()}}>Delete</button>
        </div>
    )
}

export default Delete