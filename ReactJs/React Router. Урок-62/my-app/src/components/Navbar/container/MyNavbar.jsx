import React from 'react'
import "./MyNavbar.css"
import { Link } from 'react-router-dom'

const MyNavbar = () => {
  return (
    <div className='navbar-container'>
        <h1>Isaboyev Jamoliddin</h1>
        <ul>
            <Link>About Me</Link>
            <Link to={"/hobbies"}>My Hobbies</Link>
        </ul>
    </div>
  )
}

export default MyNavbar