import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import '../css/Login.css'
const registration = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [usernameList, setusernameList] = useState([]);
    const baseUrl = "http://127.0.0.1:5000";
    const fetchEvents = async () => {
        const data = await axios.get(`${baseUrl}/events`);
        const { events } = data.data;
        setusernameList(events);
    };

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
        const data= await axios.post(`${baseUrl}/events`, {username,password})
        setusernameList([...usernameList, data.data])
        setUsername('')
        setPassword('')
        }catch(err){
        console.error(err.message)
        }
    };
    // const handleDelete =async(id) =>{
    //     try{
    //     await axios.delete(`${baseUrl}/events/${id}`)
    //     const updatelist = usernameList.filter(username => username.id !== id)
    //     setusernameList(updatelist)
    //     }catch(err){
    //     console.error(err.message)
    //     }
    // }
    useEffect(() => {
        fetchEvents();
    }, []);
  return (
    
    
        <div className="Login">
        
            <form className='forming' onSubmit={handleSubmit}>
            <input
                onChange={e => setUsername(e.target.value)}
                type="text"
                name="username"
                id="username"
                value={username}
                placeholder="Username"
                className='login_input'
            />
            <input
                onChange={e => setPassword(e.target.value)}
                type="text"
                name="password"
                id="password"
                value={password}
                placeholder ='Password'
                className='login_input'
            />
            <button type="submit" className='login_butt'>LOGIN</button>
            </form>
        
        <a href='/registration' className='register'>REGISTER</a>

        </div>
  )
}

export default registration