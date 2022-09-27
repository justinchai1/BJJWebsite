import React from 'react'

const Navbar = () => {
  return (
    <nav className='nav'>
        {/* links i need : profile, tutorials, login/logout,  */}
        <a href='/' className='logo'>Placeholder</a>
        <ul>
            <li>Tutorials </li>
            <li>Profile </li>
            <li>Login </li>
        </ul>
    </nav>
  )
}

export default Navbar