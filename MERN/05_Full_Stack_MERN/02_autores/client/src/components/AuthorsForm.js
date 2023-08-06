import React, {useState,useEffect} from 'react'
import {useParams,useNavigate} from "react-router-dom";
import axios from 'axios'
import _ from "lodash";

const AuthorsForm = (props) => {
// ---------------------------------------------
// I) VARIABLES & HOOKS
// ---------------------------------------------
const { formType } = props;
const navigate = useNavigate();
const [fullname,setFullname]=useState("");
const [quote,setQuote]=useState("");
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
    axios.get(`http://localhost:8000/authors/${id}`)
    .then(res => {
        setFullname(res.data.data.fullname);
        setQuote(res.data.data.quote);
    })
}
const updateAuthor=()=>{
    axios.put(`http://localhost:8000/authors/${id}`,{
        fullname,
        quote
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
    axios.post('http://localhost:8000/authors/',{
        fullname,
        quote
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
    let errors = err.response.data.error?.errors;
    console.log(err.response.data.error)
    let errorMesagesToUpdate = _.mapValues(errors, (error) => {
        return error.message;
    });
    setErrorMessages(errorMesagesToUpdate);
};

// ---------------------------------------------
// III) JSX
// ---------------------------------------------
    return (
        <div>
            <h1 className='text-center'>Favorite authors</h1>
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
                        <span className="input-group-text" id="inputGroup-sizing-default">Quote</span>
                        <input type="text" name='quote' value={quote} onChange={  (e) => setQuote(e.target.value) } className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                        {_.has(errorMessages, "quote") && (
                        <div className="text-danger small">{errorMessages.quote}</div>)}
                    </div>
                    <div className="d-flex justify-content-between m-3">
                        <button type="button" className="btn btn-primary" onClick={handleClick}>Cancel</button>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AuthorsForm