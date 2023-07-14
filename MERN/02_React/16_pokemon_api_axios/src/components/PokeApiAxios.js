import React, {useState} from 'react'
import axios from "axios";

const PokeApiAxios = () => {
// ---------------------------------------------
// I) VARIABLES & HOOKS
// ---------------------------------------------
const[pokeList,setPokeList]=useState([]);


// ---------------------------------------------
// II) HANDLERS & AUX FUNCTIONS
// ---------------------------------------------
    const handleonClick=()=>{
        axios.get("https://pokeapi.co/api/v2/pokemon")
            .then(response=>{setPokeList(response.data.results);
            RemainingPokemon(response.data.next)
            })
            .catch((error) => {
                console.error(error);
            });
    }
    const RemainingPokemon=(nextUrl)=>{
        axios.get(nextUrl)
            .then(response => {
                const results = response.data.results;
                setPokeList(prevList => [...prevList, ...results]);
                RemainingPokemon(response.data.next);
            })
            .catch((error) => {
                console.error(error);
            });
    }
// ---------------------------------------------
// III) JSX
// ---------------------------------------------
    return (
        <div className='container text-center'>
            <button type="button" className="btn btn-primary" onClick={handleonClick}>Fetch Pokemon</button>
            <div>
                {pokeList.map((item, idx) => (
                <div key={idx}>
                    <p>{item.name}</p>
                </div>
                ))}
            </div>
        </div>
    )
}

export default PokeApiAxios