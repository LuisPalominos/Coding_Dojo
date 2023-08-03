import React from 'react'
import {useNavigate } from "react-router-dom";
import Delete from './Delete';


const List = (props) => {
// ---------------------------------------------
// I) VARIABLES & HOOKS
// ---------------------------------------------
const navigate = useNavigate();
const { removeFromDom } = props;
// ---------------------------------------------
// II) HANDLERS & AUX FUNCTIONS
// ---------------------------------------------


const gotoProduct=(id)=>{
    navigate(`/${id}`);
}
const gotoUpdate=(id)=>{
    navigate(`/${id}/edit`);
}

// ---------------------------------------------
// III) JSX
// ---------------------------------------------
    return (
        <div >
            <h1>All products</h1>
                {props.lista.map((item,index)=>(
                    <div className="container d-flex justify-content-center m-3 pe-5" key={index}>
                        <button type="button" className="btn btn-link" onClick={(e)=>{gotoProduct(item._id)}}>{item.title}</button>
                        <button type="button" className="btn btn-warning mx-3" onClick={(e)=>{gotoUpdate(item._id)}}>edit</button>
                        <Delete product={item} removeFromDom={removeFromDom}/>
                    </div>
                ))}
        </div>
    )
}

export default List