import React from 'react'
import { Link } from 'react-router-dom'
import "./NavBar-style.css"

const NavBar = () => {
  return (
    <nav className = 'navbar-class'>

        <h2> 
            <Link to = {'/'}>It's not a blog</Link>
        </h2>

        <ul>
            <li>
                <Link to = {'/'}>Home</Link>
            </li>
            <li>
                <Link to = {'/new'} className = 'newpost-class'>New Post</Link>
            </li>
        </ul>

    </nav>
  )
}

export default NavBar