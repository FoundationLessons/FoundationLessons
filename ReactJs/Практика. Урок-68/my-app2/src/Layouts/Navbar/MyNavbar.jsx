import React from 'react'
import "./MyNavbar.css"
import {Link} from "react-router-dom"

const MyNavbar = () => {
  return (
    <div className='nav-container'>
        <h1>Tv Platform</h1>
        <ul>
          <Link to={"/popmovies"}>Popular Movies</Link>
          <Link to={"/tranding-movies"}>Tranding Movies</Link>
          <Link to={"/science-fiction"}>Science Fiction</Link>
          <Link to={"/fantasy-movies"}>Fantasy Movies</Link>
        </ul>
    </div>
  )
}

export default MyNavbar