import React from 'react'
import axios from 'axios';

const DeleteButton = (props) => {
// ---------------------------------------------
// I) VARIABLES & HOOKS
// ---------------------------------------------

const { author,removeFromDom } = props;
// ---------------------------------------------
// II) HANDLERS & AUX FUNCTIONS
// ---------------------------------------------
const handleOnClick = (e) => {

    if (author) {
        deleteAuthor(author._id);
    }
};

const deleteAuthor = (id) => {
    axios.delete(`http://localhost:8000/authors/${id}`)
        .then((response)=>{
            if(author){
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
        <div className="d-flex align-content-center flex-wrap">
            <button type="button" className="mx-1 btn btn-outline-danger btn-sm py-0" onClick={(e)=>{handleOnClick()}}>Delete</button>
        </div>
    )
}

export default DeleteButton