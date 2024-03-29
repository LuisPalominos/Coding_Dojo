import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { baseURL } from "../config";
import _ from "lodash";
import DeleteButton from "./DeleteButton";

const PlayersList = (props) => {
// ---------------------------------------------
// I) VARIABLES & HOOKS
// ---------------------------------------------
const[lista,setLista]=useState([]);


// ---------------------------------------------
// II) HANDLERS & AUX FUNCTIONS
// ---------------------------------------------
useEffect(()=>{
    axios.get(`${baseURL}/players/`)
        .then((response)=>{
            const sortedData = _.orderBy(response.data.data, ['fullname'], ['asc']);
            setLista(sortedData);
        })
        .catch((error) => {
                console.error(error);
        });
},[]);

const removeFromDom = playerId => {
    setLista(lista.filter(player => player._id !== playerId));
}


// ---------------------------------------------
// III) JSX
// ---------------------------------------------
    return (
        <div className="container">
            <div className='container d-flex fs-4 p-5'>
                <Link
                    className="mx-1 btn btn-link btn-sm py-0 fs-4"
                    to={`/`}
                >
                    List
                </Link>
                |
                <Link
                    className="mx-1 btn btn-link btn-sm py-0 fs-4"
                    to={`/new`}
                >
                    Add Player
                </Link>
            </div>
            <table className="table table-striped">
                <thead className="table-secondary">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Author</th>
                    <th scope="col">Prefered Position</th>
                    <th scope="col">Actions</th>
                </tr>
                </thead>
                <tbody>
                {lista &&
                    lista.map((item, idx) => (
                    <tr key={idx}>
                        <th scope="row">{idx + 1}</th>
                        <td>
                        <Link
                            className="mx-1 btn btn-link btn-sm py-0"
                            to={`/${item._id}`}
                        >
                            {item.fullname}
                        </Link>    
                        </td>
                        <td>
                            {item.position}
                        </td>
                        <td >
                            <DeleteButton removeFromDom={removeFromDom} player={item}/>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default PlayersList