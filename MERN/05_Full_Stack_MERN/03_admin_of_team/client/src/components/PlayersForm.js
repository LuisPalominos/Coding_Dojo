import React, {useState,useEffect} from 'react'
import {useParams,useNavigate,Link} from "react-router-dom";
import axios from 'axios'
import { baseURL } from '../config';
import _ from "lodash";

const PlayerForm = (props) => {
// ---------------------------------------------
// I) VARIABLES & HOOKS
// ---------------------------------------------
const { formType } = props;
const navigate = useNavigate();
const [fullname,setFullname]=useState("");
const [position,setPosition]=useState("");
const { id } = useParams();
const [errorMessages, setErrorMessages] = useState({});
// ---------------------------------------------
// II) HANDLERS & AUX FUNCTIONS
// ---------------------------------------------
const handleSubmit=(e)=>{
    e.preventDefault();
    if (formType === "update") {
        updateAuthor();
    } else if (formType === "add"){
        addAuthor();
}
}
const getOneAuthor =()=>{
    axios.get(`${baseURL}/players/${id}`)
    .then(res => {
        setFullname(res.data.data.fullname);
        setPosition(res.data.data.position);
    })
}
const updateAuthor=()=>{
    axios.put(`${baseURL}/players/${id}`,{
        fullname,
        position
    })
        .then((response)=>{
            navigate('/');
        })
        .catch((error) => {
                console.error(error);
                updateErrorMessages(error);
            });
}

const addAuthor=()=>{    
    axios.post(`${baseURL}/players/`,{
        fullname,
        position
    })
        .then((response)=>{
            navigate('/');
        })
        .catch((error) => {
                console.error(error);
                updateErrorMessages(error);
            });
}

useEffect(() => {
    if (formType === "update") {
        getOneAuthor();
    }
}, [])

const handleClick=()=>{
    navigate('/');
};

const updateErrorMessages = (err) => {
    let errors = err.response.data.error;
    let errorMesagesToUpdate = _.mapValues(errors, (error) => {
        return error;
    });
    setErrorMessages(errorMesagesToUpdate);
};

// ---------------------------------------------
// III) JSX
// ---------------------------------------------
    return (
        <div>
            <h1 className='text-center'>Add Player</h1>
            <Link
                className="mx-1 my-3 btn btn-link btn-sm py-0"
                to={`/`}
            >
                Home
            </Link>
            <p>{formType === "update" ? "Edit this Author" : "Add a New Author"}</p>
            <form className="container text-center" onSubmit={ handleSubmit }>
                <div className="input-group mb-3 d-flex flex-column align-content-center">
                    <div className="m-3">
                        <span className="input-group-text" id="inputGroup-sizing-default">Full Name</span>
                        <input type="text" name='fullname' value={fullname} onChange={  (e) => setFullname(e.target.value) } className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                        {_.has(errorMessages, "fullname") && (
                        <div className="text-danger small">{errorMessages.fullname}</div>)}
                    </div>
                    <div className="m-3">
                        <span className="input-group-text" id="inputGroup-sizing-default">Position</span>
                        <input type="text" name='position' value={position} onChange={  (e) => setPosition(e.target.value) } className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                        {_.has(errorMessages, "position") && (
                        <div className="text-danger small">{errorMessages.position}</div>)}
                    </div>
                    <div className="d-flex justify-content-between m-3">
                        <button type="button" className="btn btn-primary" onClick={handleClick}>Cancel</button>
                        <button type="submit" className="btn btn-primary">Add</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default PlayerForm