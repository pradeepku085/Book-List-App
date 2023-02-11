import {Link, useNavigate} from 'react-router-dom';
import React, { useState } from 'react';

import './Signup.css';




function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const Navigate = useNavigate();

  const handleSignup = async()=>{
    
    if(password===confirmPass){
      console.log(username, password);
      let result = await fetch("http://localhost:5000/register",{
        method: "post",
        body: JSON.stringify({username, password}),
        headers: {
          "Content-Type": "application/json",
        }
      })

      result = await result.json();
      Navigate('/');
    }
    else{
      console.log("Password not matching");
    }
  }

  return (
    <div className='signup'>
      <form className='signup-form'>
        <h1>Register</h1>
        <input type="text" value={username} placeholder="Username" onChange={(e) => { setUsername(e.target.value) }} />
        <input type="text" value={password} placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} />
        <input type="text" value={confirmPass} placeholder="Username" onChange={(e) => { setConfirmPass(e.target.value) }} />
        <button type='button' onClick={handleSignup}>Register</button>
        <p>Already Register?
          <Link to='/login' className='link-sign'>Login</Link>
        </p>
      </form>
    </div>
  )
}

export default Signup;