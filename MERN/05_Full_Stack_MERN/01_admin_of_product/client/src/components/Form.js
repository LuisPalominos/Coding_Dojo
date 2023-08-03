import React, {useState,useEffect} from 'react'
import {useParams,useNavigate} from "react-router-dom";
import axios from 'axios'


const Form = (props) => {
// ---------------------------------------------
// I) VARIABLES & HOOKS
// ---------------------------------------------
const { formType } = props;
const navigate = useNavigate();
const [title,setTitle]=useState("");
const [price,setPrice]=useState();
const [description,setDescription]=useState("");
const { id } = useParams();
const [productid,setProductid]=useState(id);
const [reload, setReload] = useState(false);
// ---------------------------------------------
// II) HANDLERS & AUX FUNCTIONS
// ---------------------------------------------
const handleSubmit=(e)=>{
    e.preventDefault();
    if (formType === "update") {
        updateProduct();
    } else{
        addProduct();
}
}
const getOneProduct =()=>{
    axios.get(`http://localhost:8000/api/products/${id}`)
    .then(res => {
        setProductid(res.data.Product._id);
        setTitle(res.data.Product.title);
        setPrice(res.data.Product.price);
        setDescription(res.data.Product.description);
    })
}
const updateProduct=()=>{
    axios.put(`http://localhost:8000/api/products/${productid}`,{
        title,
        price,
        description
    })
        .then((response)=>{
            navigate('/');
        })
        .catch((error) => {
                console.error(error);
            });
}

const addProduct=()=>{    
    axios.post('http://localhost:8000/api/products',{
        title,
        price,
        description
    })
        .then((response)=>{
            setReload(true);
        })
        .catch((error) => {
                console.error(error);
            });
}

useEffect(() => {
    if (formType === "update") {
        getOneProduct();
    }
}, [])

useEffect(() => {
    if (reload) {
        window.location.reload();
        setReload(false);
    }
}, [reload]);
// ---------------------------------------------
// III) JSX
// ---------------------------------------------
    return (
        <div className="container">
            <h1>{formType === "update" ? "Update Product" : "Product Manager"}</h1>
            <form className="container text-center" onSubmit={ handleSubmit }>
                <div className="input-group mb-3 d-flex flex-column align-content-center">
                    <div className="m-3">
                        <span className="input-group-text" id="inputGroup-sizing-default">Title</span>
                        <input type="text" name='title' value={title} onChange={  (e) => setTitle(e.target.value) } className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                    </div>
                    <div className="m-3">
                        <span className="input-group-text" id="inputGroup-sizing-default">Price</span>
                        <input type="text" name='price' value={price} onChange={  (e) => setPrice(e.target.value) } className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                    </div>
                    <div className="m-3">
                        <span className="input-group-text" id="inputGroup-sizing-default">Description</span>
                        <input type="text" name='description' value={description} onChange={  (e) => setDescription(e.target.value) } className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-primary">{formType === "update" ? "Edit" : "Create"}</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Form