import {Link, useNavigate} from 'react-router-dom';
import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();

  const handleLogin = async ()=>{
    let result = await fetch("http://localhost:5000/login",{
      method: "post",
      body: JSON.stringify({username, password}),
      headers: {
        "Content-Type": "application/json",
      }
    })
    result = await result.json();
    console.log(result);
    localStorage.setItem("users", JSON.stringify(result));
    Navigate('/');
  }

  return (
    <div className='login'>
        <form className='login-form'>
        <h1>Member Login</h1>
        <input type="text" value={username} placeholder="Username" onChange={(e) => { setUsername(e.target.value) }} />
        <input type="text" value={password} placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} />
        <button type='button' onClick={handleLogin}>Login</button>
        <p>Don't have an account?
          <Link to='/signup' className='link-sign'>Register</Link>
        </p>
      </form>
    </div>
  )
}

export default Login;