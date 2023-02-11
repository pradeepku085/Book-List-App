import React from 'react';
import {useNavigate, Link} from 'react-router-dom';
import './Nav.css';

function Nav() {
  const auth = localStorage.getItem("users");
  console.log(JSON.parse(auth).data.result.username);
  const navigate = useNavigate();

  const handleLogout = ()=>{
    localStorage.clear("users");
    navigate('/');
  }

  return (
    <div className='navbar'>
      {
        auth ? (<ul>
          <li>Hello, {JSON.parse(auth).data.result.username}</li>
          <li > <Link to="/login" onClick={handleLogout}>Logout</Link></li>
        </ul>):
        <ul>
          <li> <Link to="/login" >Login</Link></li>
          <li > <Link to="/signup" >Signup</Link></li>
        </ul>
      }
    </div>
  )
}

export default Nav;