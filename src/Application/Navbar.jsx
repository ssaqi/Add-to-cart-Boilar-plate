import React from 'react'
import './Mix.css'
import {Link } from 'react-router-dom'
import GitHubIcon from '@mui/icons-material/GitHub';
function Navbar() {
  return (
    <>
 <div className='container'></div>   
<nav className="navbar navbar-expand-lg bg-light">
  <div className="container">
    <a className="navbar-brand" href="/">
      SQ_STORE
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        {/* <li className="nav-item">
          <a className="nav-link" >
           <Link to="#" className="nav-link" style={{fontWeight:600, color: "GrayText"}} >Sign Up</Link>
          </a>
        </li> */}
        <li className="nav-item">
        <a className="nav-link" >
        <Link to="#" className="nav-link" style={{fontWeight:600, color: "GrayText"}} >{<GitHubIcon style={{color:"green"}}/>}</Link>
        </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
  )
}

export default Navbar