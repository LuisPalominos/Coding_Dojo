import React, {useState,useEffect} from 'react'
import Form from '../components/Form'
import List from '../components/List'
import axios from 'axios'

const Main = () => {
// ---------------------------------------------
// I) VARIABLES & HOOKS
// ---------------------------------------------

const[lista,setLista]=useState([]);

// ---------------------------------------------
// II) HANDLERS & AUX FUNCTIONS
// ---------------------------------------------

useEffect(()=>{
    axios.get('http://localhost:8000/api/products')
        .then((response)=>{
            setLista(response.data.Products);
        })
        .catch((error) => {
                console.error(error);
        });
},[]);

const removeFromDom = productId => {
    setLista(lista.filter(product => product._id !== productId));
}

// ---------------------------------------------
// III) JSX
// ---------------------------------------------
    return (
        <div className="container text-center">
            <Form />
            <hr/>
            <List lista={lista} removeFromDom={removeFromDom}/>
        </div>
    )
}

export default Main