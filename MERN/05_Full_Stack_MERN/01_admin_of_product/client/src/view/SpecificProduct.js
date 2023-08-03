import React, {useEffect,useState} from 'react'
import {useParams,useNavigate} from "react-router-dom";
import axios from "axios";
import Delete from '../components/Delete';

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


const onClickHandler=()=>{
    navigate('/');
}

// ---------------------------------------------
// III) JSX
// ---------------------------------------------
    return (
        <div className="container d-flex flex-column align-content-center text-center">
            <h1>{productInfo.title}</h1>
            <p>Price: {productInfo.price}</p>
            <p>Description: {productInfo.description}</p>
            <div className="container d-flex justify-content-center px-3">
                <Delete productid={id}/>
                <button type="button" className="btn btn-primary mx-1" onClick={onClickHandler}>Back Home</button>
            </div>
        </div>
    )
}

export default SpecificProduct