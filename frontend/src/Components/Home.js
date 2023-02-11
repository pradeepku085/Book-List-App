import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();


  return (
    <div className='homepage'>
      <h1>Book Lists</h1>
      <button type='button' className='homepage-btn' onClick={()=>{navigate("AddBook")}}> + Add New Book</button>
    </div>
  )
}

export default Home;