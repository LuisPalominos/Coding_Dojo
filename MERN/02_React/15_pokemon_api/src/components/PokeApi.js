import React, {useState} from 'react'

const PokeApi = () => {
// ---------------------------------------------
// I) VARIABLES & HOOKS
// ---------------------------------------------
const[pokeList,setPokeList]=useState([]);


// ---------------------------------------------
// II) HANDLERS & AUX FUNCTIONS
// ---------------------------------------------
    const handleonClick=()=>{
        fetch("https://pokeapi.co/api/v2/pokemon")
        .then(response => {
            return response.json();
        }).then(response => {
            setPokeList(response.results);
            fetchRemainingPokemon(response.next);
            // console.log(response.results);
        }).catch(err=>{
            console.log(err);
        });
    }
    const fetchRemainingPokemon = (nextUrl) => {
        if (nextUrl) {
            fetch(nextUrl)
            .then(response => response.json())
            .then(response => {
                const results = response.results;
                setPokeList(prevList => [...prevList, ...results]);
                fetchRemainingPokemon(response.next);
            })
            .catch(err => {
                console.log(err);
            });
        }
    };

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

export default PokeApi