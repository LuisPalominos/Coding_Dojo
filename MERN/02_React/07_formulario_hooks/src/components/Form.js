import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] =useState("");
    
    const createUser = (e) => {
        e.preventDefault();
        const newuser = [username, email, password];
        setUser(newuser);
    };
    
    return(
        <div>
            <form onChange={ createUser }>
                <div>
                    <label>Username: </label> 
                    <input type="text" onChange={ (e) => setUsername(e.target.value) } />
                </div>
                <div>
                    <label>Email Address: </label> 
                    <input type="text" onChange={ (e) => setEmail(e.target.value) } />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" onChange={ (e) => setPassword(e.target.value) } />
                </div>
            </form>
            <p>Your Form Data:</p>
            <p>{user}</p>
        </div>
    );
};
    
export default UserForm;
