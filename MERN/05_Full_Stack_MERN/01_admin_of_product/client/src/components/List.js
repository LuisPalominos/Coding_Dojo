import React from 'react'
import axios from 'axios';
import {useNavigate } from "react-router-dom";


const List = (props) => {
// ---------------------------------------------
// I) VARIABLES & HOOKS
// ---------------------------------------------
const navigate = useNavigate();
const { removeFromDom } = props;
// ---------------------------------------------
// II) HANDLERS & AUX FUNCTIONS
// ---------------------------------------------

const deleteProduct = (id) => {
    axios.delete(`http://localhost:8000/api/products/${id}`)
        .then((response)=>{
            removeFromDom(id)
        })
        .catch((error) => {
                console.error(error);
            });
}
const gotoProduct=(id)=>{
    navigate(`/${id}`);
}

// ---------------------------------------------
// III) JSX
// ---------------------------------------------
    return (
        <div >
            <h1>All products</h1>
                {props.lista.map((item,index)=>(
                    <div className="m-3" key={index}>
                        <button type="button" class="btn btn-link" onClick={(e)=>{gotoProduct(item._id)}}>{item.title}</button>
                        <button type="submit" className="btn btn-primary" onClick={(e)=>{deleteProduct(item._id)}}>delete</button>
                    </div>
                ))}
        </div>
    )
}

export default List