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
    setIden(e.target.firstname.value);
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
                    <select onChange={handleonChange} className="form-select w-25" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="people">people</option>
                        <option value="films">films</option>
                        <option value="starships">starships</option>
                        <option value="vehicles">vehicles</option>
                        <option value="species">species</option>
                        <option value="planets">planets</option>
                    </select>
                    <form onSubmit={ handleSubmit }>
                        <input type="text" name='firstname' className="form-control w-25" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                        <button type="submit" className="btn btn-primary">Add</button>
                    </form>
                    <div>
                        {
                            category === 'people'?
                            <div>
                                <h1>{data.name}</h1>
                                <p>{data.height}</p>
                                <p>{data.birth_year}</p>
                                <p>{data.eye_color}</p>
                                <p>{data.gender}</p>
                            </div>:""
                        }
                        {
                            category === 'films'?
                            <div>
                                <h1>{data.title}</h1>
                                <p>{data.director}</p>
                                <p>{data.producer}</p>
                            </div>:""
                        }
                        {
                            category === 'starships'?
                            <div>
                                <h1>{data.name}</h1>
                                <p>{data.model}</p>
                                <p>{data.cargo_capacity}</p>
                                <p>{data.manufacturer}</p>
                                <p>{data.passengers}</p>
                            </div>:""
                        }
                        {
                            category === 'vehicles'?
                            <div>
                                <h1>{data.name}</h1>
                                <p>{data.model}</p>
                                <p>{data.manufacturer}</p>
                                <p>{data.passengers}</p>
                                <p>{data.cargo_capacity}</p>
                            </div>:""
                        }
                        {
                            category === 'species'?
                            <div>
                                <h1>{data.name}</h1>
                                <p>{data.classification}</p>
                                <p>{data.designation}</p>
                                <p>{data.language}</p>
                                <p>{data.average_lifespan}</p>
                            </div>:""
                        }
                        {
                            category === 'planets'?
                            <div>
                                <h1>{data.name}</h1>
                                <p>{data.terrain}</p>
                                <p>{data.climate}</p>
                                <p>{data.population}</p>
                                <p>{data.diameter}</p>
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

// setData(response.data.results.map((datum)=>{
//     let splited_url =datum.url.split("/")
//     let id =splited_url[splited_url.length-2]
//     return {id: id,name:datum.name}
// }));
// if (category === 'people') {
//     result = response.data;
// } else if (category === 'films') {
//     result = response.data;
// } else if (category === 'starship') {
//     result = response.data;
// } else if (category === 'vehicles') {
//     result = response.data;
// } else if (category === 'species') {
//     result = response.data;
// } else if (category === 'planets') {
//     result = response.data;
// }