import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");
    const [user, setUser] =useState("");
    
    const createUser = (e) => {
        e.preventDefault();
        const newuser = [firstname, lastname, email, password, confirmpassword];
        setUser(newuser);

    };

    
    return(
        <div className='container col-3'>
            <form onChange={ createUser }>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Firstname</span>
                    <input type="text" onChange={ (e) => setFirstname(e.target.value) } className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Lastname</span>
                    <input type="text" onChange={ (e) => setLastname(e.target.value) } className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Email</span>
                    <input type="email" onChange={ (e) => setEmail(e.target.value) } className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Password</span>
                    <input type="password" onChange={ (e) => setPassword(e.target.value) } className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Confirm Password</span>
                    <input type="password" onChange={ (e) => setConfirmpassword(e.target.value) } className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                </div>
            </form>
            <p className='text-center'>Your Form Data:</p>
            <p>Firstname: {user[0]}</p>
            <p>Lastname: {user[1]}</p>
            <p>Email: {user[2]}</p>
            <p>Password: {user[3]}</p>
            <p>Confirm Password: {user[4]}</p>
        </div>
    );
};
    
export default UserForm;