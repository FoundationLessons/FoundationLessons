import React from 'react'
import "./MyNavbar.css"
import {Link} from "react-router-dom"

const MyNavbar = () => {
  return (
    <div className='nav-container'>
        <h1>Tv Platform</h1>
        <ul>
          <Link to={"/cartoons"}>Cartoons</Link>
          <Link to={"/war-movies"}>War Movies</Link>
        </ul>
    </div>
  )
}

export default MyNavbar