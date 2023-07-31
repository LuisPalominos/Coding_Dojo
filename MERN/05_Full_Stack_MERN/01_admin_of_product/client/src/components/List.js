import React from 'react'
import axios from 'axios';



const List = (props) => {
// ---------------------------------------------
// I) VARIABLES & HOOKS
// ---------------------------------------------

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

// ---------------------------------------------
// III) JSX
// ---------------------------------------------
    return (
        <div>
            <h1>All products</h1>
            {props.lista.map((item,index)=>(
                <div  key={index}>
                    <p>{item.title}</p>
                    <button type="submit" className="btn btn-primary" onClick={(e)=>{deleteProduct(item._id)}}>delete</button>
                </div>
            ))}
        </div>
    )
}

export default List