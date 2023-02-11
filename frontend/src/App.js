import React, { useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';

import Login from './Components/Login';
import Signup from './Components/Signup';
import Nav from './Components/Nav';
import Logout from './Components/Logout';
import Home from './Components/Home';
import Footer from './Components/Footer';
import PrivateComponent from './Components/PrivateComponent';
import AddBook from './Components/AddBook';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route element={<PrivateComponent/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/AddBook' element={<AddBook/>}/>
        </Route>
      </Routes>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
