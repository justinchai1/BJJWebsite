import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";

const registration = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
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
        const data= await axios.post(`${baseUrl}/events`, {username,email,password})
        setusernameList([...usernameList, data.data])
        setUsername('')
        setEmail('')
        setPassword('')
        }catch(err){
        console.error(err.message)
        }
    };
    const handleDelete =async(id) =>{
        try{
        await axios.delete(`${baseUrl}/events/${id}`)
        const updatelist = usernameList.filter(username => username.id !== id)
        setusernameList(updatelist)
        }catch(err){
        console.error(err.message)
        }
    }
    useEffect(() => {
        fetchEvents();
    }, []);
  return (
    
    
        <div className="App">
        <section>
            <form onSubmit={handleSubmit}>
            <label htmlFor="username"> Username: </label>
            <input
                onChange={e => setUsername(e.target.value)}
                type="text"
                name="username"
                id="username"
                value={username}
            />
            <label htmlFor="email"> Email: </label>
            <input
                onChange={e => setEmail(e.target.value)}
                type="text"
                name="email"
                id="email"
                value={email}
            />
            <label htmlFor="password"> Password: </label>
            <input
                onChange={e => setPassword(e.target.value)}
                type="text"
                name="password"
                id="password"
                value={password}
            />
            <button type="submit">Submit</button>
            </form>
        </section>
        <section>
            <ul>
            {
                usernameList.map(username => {
                return (
                    <div key = {username.id}>
                    {username.username}
                    <li><button onClick={() => handleDelete(username.id)}>Delete</button></li>
                    </div>
                    
                )
                })
            }
            </ul>
        </section>
        </div>
  )
}

export default registration