import './App.css';

import React from 'react';
// import Nav from './Nav';
import Home from './Pages/Home';
import About from './Pages/About';
import Shop from './Pages/Shop';
import ErrorPage from './Pages/ErrorPage';
// import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>

      <p>Hi</p>
      <nav>
        <Link to="/">Home </Link>
        <Link to="/about">About </Link>
        <Link to="/shop">Shop </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="about/:username" element={<About/>} />
        <Route path="shop" element={<Shop/>} /> 
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
      <div>
        Footer
      </div>
 
    </BrowserRouter>
  )
}


export default App;