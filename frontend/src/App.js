import "./App.css";
import React from 'react'
import Registration from "./components/registration";
import {Routes, Route} from 'react-router-dom';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Tutorials from "./components/Tutorials";
import Login from "./components/Login"
function App() {
  
  return(
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/registration" element={<Registration/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/tutorials" element={<Tutorials/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      
    </div>
    
  );
}

export default App;
