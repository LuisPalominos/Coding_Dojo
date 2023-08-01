import React, {useEffect,useState} from 'react'
import {useParams,useNavigate} from "react-router-dom";
import axios from "axios";

const SpecificProduct = (props) => {
// ---------------------------------------------
// I) VARIABLES & HOOKS
// ---------------------------------------------

const { id } = useParams();
const[productInfo,setProductInfo]=useState([]);
const navigate = useNavigate();

// ---------------------------------------------
// II) HANDLERS & AUX FUNCTIONS
// ---------------------------------------------

useEffect(() => {
    axios
        .get(`http://localhost:8000/api/products/${id}`)
        .then((response) => {setProductInfo(response.data.Product)})
        .catch((error) => {
            console.error(error);
        })
}, []);

const deleteProduct = () => {
    axios.delete(`http://localhost:8000/api/products/${id}`)
        .then((response)=>{
            navigate('/');
        })
        .catch((error) => {
                console.error(error);
            });
}


// ---------------------------------------------
// III) JSX
// ---------------------------------------------
    return (
        <div className="container d-flex flex-column align-content-center text-center">
            <h1>{productInfo.title}</h1>
            <p>Price: {productInfo.price}</p>
            <p>Description: {productInfo.description}</p>
            <button type="submit" className="btn btn-primary container col-3 text center" onClick={(e)=>{deleteProduct()}}>delete</button>
        </div>
    )
}

export default SpecificProduct