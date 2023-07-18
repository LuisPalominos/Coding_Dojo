import React, {useEffect,useState} from 'react'
import {useParams} from "react-router-dom";
import axios from "axios";

const LISTO=1;
const CARGANDO=2
const ERROR=3;

const PaginaEspecifica = () => {
// ---------------------------------------------
// I) VARIABLES & HOOKS
// ---------------------------------------------
const { id } = useParams();
const[personaje,setPersonaje]=useState([]);
const[status,setStatus]=useState(CARGANDO);
const[lugar,setLugar]=useState("")

// ---------------------------------------------
// II) HANDLERS & AUX FUNCTIONS
// ---------------------------------------------

useEffect(() => {
    axios
        .get(`https://swapi.dev/api/people/${id}`)
        .then((response) => {setPersonaje(response.data)
            setStatus(LISTO);
            placeOrigin(personaje.homeworld)
        })
        .catch((error) => {
            console.error(error);
        })
}, [personaje.homeworld]);

const placeOrigin=(url)=>{
    axios.get(url)
        .then(response => {
            const results = response.data.name
            setLugar(results);
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
            {
                status === LISTO ?
                <div>
                    <h1>{personaje.name}</h1>
                    <p>Heigth is:{personaje.height} cm</p>
                    <p>Birth Year is: {personaje.birth_year}</p>
                    <p>Eye Color is: {personaje.eye_color}</p>
                    <p>Gender is: {personaje.gender}</p>
                    <p>Homeworld: {lugar}</p>
                </div>:
                null
            }

            {
                status === CARGANDO ?
                <h1>cargando</h1> :
                null
            }
            {
                status === ERROR ?
                <div>
                    <h1>Estos no son los droides que está buscando</h1>
                    <img src="/02_React/18_luke_apiwalker/src/components/obiwan.jpg" alt="error"/>
                </div>:
                null
            }
        </div>
    )
}

export default PaginaEspecifica