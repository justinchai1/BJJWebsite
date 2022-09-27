import "./App.css";
import React from 'react'
import Registration from "./components/registration";
import {Routes, Route} from 'react-router-dom';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
function App() {
  
  return(
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/registration" element={<Registration/>}/>
      </Routes>
      
    </div>
    
  );
}

export default App;
