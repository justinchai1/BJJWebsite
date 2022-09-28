import React from 'react'
import '../css/Navbar.css'
const Navbar = () => {
  return (
    <nav className='nav'>
        {/* links i need : profile, tutorials, login/logout,  */}
        <a href='/' className='logo'>Home</a>
        <ul>
            <li><a href='/tutorials'>Tutorials</a> </li>
            <li><a href='/profile'>Profile</a> </li>
            <li><a href='/login'>Login</a> </li>
        </ul>
    </nav>
  )
}

export default Navbar