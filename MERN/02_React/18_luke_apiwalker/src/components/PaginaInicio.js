import React, {useEffect, useState} from 'react'
import axios from "axios";

const LISTO=1;
const CARGANDO=2
const ERROR=3;


const PaginaInicio = (props) => {
// ---------------------------------------------
// I) VARIABLES & HOOKS
// ---------------------------------------------

const[data,setData]=useState([]);
const[category,setCategory]=useState("")
const[iden,setIden]=useState("")
const[status,setStatus]=useState(LISTO);

// ---------------------------------------------
// II) HANDLERS & AUX FUNCTIONS
// ---------------------------------------------
const handleSubmit=(e)=>{
    e.preventDefault();
    setIden(e.target.search.value);
}
useEffect(() => {
    if (iden) {
        setStatus(CARGANDO);

        axios
            .get(`https://swapi.dev/api/${category}/${iden}`)
            .then((response) => {
            let result;
            result = response.data;
            if (result) {
                setData(result);
                setStatus(LISTO);
            } else {
                setStatus(ERROR);
            }
            })
            .catch((error) => {
                console.error(error);
                setStatus(ERROR);
            });
        }
}, [category, iden]);

const handleonChange=(e)=>{
    setCategory(e.target.value);
}


// ---------------------------------------------
// III) JSX
// ---------------------------------------------
    return (
        <div>
            {
                status === LISTO ?
                <div className='container'>
                    <div className='container d-flex'>
                        <select onChange={handleonChange} className="form-select w-25 h-100" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                            <option value="people">people</option>
                            <option value="films">films</option>
                            <option value="starships">starships</option>
                            <option value="vehicles">vehicles</option>
                            <option value="species">species</option>
                            <option value="planets">planets</option>
                        </select>
                        <form className='container d-flex' onSubmit={ handleSubmit }>
                            <span className="input-group-text" id="inputGroup-sizing-default">ID</span>
                            <input type="text" name='search' className="form-control w-25" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                            <button type="submit" className="btn btn-primary">Search</button>
                        </form>
                    </div>
                    <div>
                        {
                            category === 'people'?
                            <div>
                                <h1>{data.name}</h1>
                                <p>Heigth is:{data.height} cm</p>
                                <p>Birth Year is: {data.birth_year}</p>
                                <p>Eye Color is: {data.eye_color}</p>
                                <p>Gender is: {data.gender}</p>
                            </div>:""
                        }
                        {
                            category === 'films'?
                            <div>
                                <h1>{data.title}</h1>
                                <p>Director: {data.director}</p>
                                <p>Producer: {data.producer}</p>
                            </div>:""
                        }
                        {
                            category === 'starships'?
                            <div>
                                <h1>{data.name}</h1>
                                <p>Starship Model: {data.model}</p>
                                <p>Cargo Capacity: {data.cargo_capacity}</p>
                                <p>Manufacturer: {data.manufacturer}</p>
                                <p>Passengers: {data.passengers}</p>
                            </div>:""
                        }
                        {
                            category === 'vehicles'?
                            <div>
                                <h1>{data.name}</h1>
                                <p>Vehicle Model{data.model}</p>
                                <p>Manufacturer: {data.manufacturer}</p>
                                <p>Passengers: {data.passengers}</p>
                                <p>Cargo Capacity: {data.cargo_capacity}</p>
                            </div>:""
                        }
                        {
                            category === 'species'?
                            <div>
                                <h1>{data.name}</h1>
                                <p>Classification: {data.classification}</p>
                                <p>Designation: {data.designation}</p>
                                <p>Language: {data.language}</p>
                                <p>Average Lifespan: {data.average_lifespan}</p>
                            </div>:""
                        }
                        {
                            category === 'planets'?
                            <div>
                                <h1>{data.name}</h1>
                                <p>Terrain: {data.terrain}</p>
                                <p>Climate: {data.climate}</p>
                                <p>Population: {data.population}</p>
                                <p>Diameter: {data.diameter} Km</p>
                            </div>:""
                        }
                    </div>
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

export default PaginaInicio