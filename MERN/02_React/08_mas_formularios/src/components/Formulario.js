import React, {useState} from  'react';
    
    
const Formulario = (props) => {
// ---------------------------------------------
// I) VARIABLES & HOOKS
// ---------------------------------------------
    const {inputs, setInputs} = props;
    const [titleErrorF, setTitleErrorF] = useState("");
    const [titleErrorL, setTitleErrorL] = useState("");
    const [titleErrorE, setTitleErrorE] = useState("");
    const [titleErrorP, setTitleErrorP] = useState("");
    const [titleErrorC, setTitleErrorC] = useState("");


// ---------------------------------------------
// II) HANDLERS & AUX FUNCTIONS
// ---------------------------------------------
    const handleChange=(e)=>{
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
        if (e.target.name==='firstname'){
            if (e.target.value.length < 2) {
                setTitleErrorF("Fisrt Name must be at least 2 characters");
            } else{
                setTitleErrorF("")
            }
        }
        if (e.target.name==='lastname'){
            if (e.target.value.length < 2) {
                setTitleErrorL("Last Name must be at least 2 characters");
            } else{
                setTitleErrorL("")
            }
        }        
        if (e.target.name==='email'){
            if (e.target.value.length < 5) {
                setTitleErrorE("Email must be at least 5 characters");
            } else{
                setTitleErrorE("")
            }
        }        
        if (e.target.name==='password'){
            if (e.target.value.length < 8) {
                setTitleErrorP("Password must be at least 8 characters");
            } else{
                setTitleErrorP("")
            }
        }
        if (e.target.name==='confirmPassword'){
            if (e.target.value!==inputs.password) {
                setTitleErrorC("Passwords must match");
            } else{
                setTitleErrorC("")
            }
        }

    };

// ---------------------------------------------
// III) JSX
// ---------------------------------------------
    return(
        <div className='container col-3'>
            <form>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Firstname</span>
                    <input type="text" name='firstname' onChange={ handleChange } className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                </div>
                <div>{titleErrorF?<p style={{color:'red'}}>{ titleErrorF }</p> :''}</div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Lastname</span>
                    <input type="text" name='lastname' onChange={ handleChange } className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                </div>
                <div>{titleErrorL?<p style={{color:'red'}}>{ titleErrorL }</p> :''}</div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Email</span>
                    <input type="email" name='email' onChange={ handleChange } className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                </div>
                <div>{titleErrorE?<p style={{color:'red'}}>{ titleErrorE }</p> :''}</div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Password</span>
                    <input type="password" name='password' onChange={ handleChange } className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                </div>
                <div>{titleErrorP?<p style={{color:'red'}}>{ titleErrorP }</p> :''}</div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Confirm Password</span>
                    <input type="password" name='confirmPassword' onChange={ handleChange } className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                </div>
                <div>{titleErrorC?<p style={{color:'red'}}>{ titleErrorC }</p> :''}</div>
            </form>
        </div>
    );
};
    
export default Formulario;