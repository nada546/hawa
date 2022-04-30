import React, { useEffect } from 'react';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Login from './Components/Pages/Login';
import Home from './Components/Pages/Home'
import SelfCheck from './Components/Pages/SelfCheck';
import Tahlel from './Components/Pages/Tahlel';
import Taqweem from './Components/Pages/Taqweem';
import Risk from './Components/Pages/Risk';
import Navbar from './Components/Layouts/navbar/Navbar';
import './App.css';
import Dropdown from './Components/Pages/Dropdown';
import { useState } from 'react';
function App() {
  
  
  return (
    <div className="App">
      <Router>
        {
        window.location.pathname == '/login' ?   null :
        
          <Navbar/>
     
        }
         <Routes>

          <Route path="/" element={<Home />}/>
          <Route path="/taqweem" element={<Taqweem />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/risk" element={<Risk />} />
          <Route path="/selfecheck" element={<SelfCheck/>} />
          <Route path="/tahlel" element={<Tahlel />} />
         
       
      </Routes>
    </Router>


    </div>
  );
}

export default App;
