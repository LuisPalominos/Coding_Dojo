import React, {useEffect,useState} from 'react'
import {useParams,useNavigate} from "react-router-dom";
import axios from "axios";

const SpecificAuthor = (props) => {
// ---------------------------------------------
// I) VARIABLES & HOOKS
// ---------------------------------------------

const { id } = useParams();
const[authorInfo,setAuthorInfo]=useState([]);
const navigate = useNavigate();

// ---------------------------------------------
// II) HANDLERS & AUX FUNCTIONS
// ---------------------------------------------

useEffect(() => {
    axios
        .get(`http://localhost:8000/authors/${id}`)
        .then((response) => {setAuthorInfo(response.data.data)})
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
        <div className="container d-flex flex-column align-content-center text-center my-5">
            <h1 className='mb-5'>{authorInfo.fullname}</h1>
            <p className='mb-5'>Qoute: {authorInfo.quote}</p>
            <div className="container d-flex justify-content-center px-3">
                <button type="button" className="mx-1 btn btn-outline-primary btn-sm py-0" onClick={onClickHandler}>Back Home</button>
            </div>
        </div>
    )
}
export default SpecificAuthor