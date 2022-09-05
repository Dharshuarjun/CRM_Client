import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "./cloudlogo.png";

const Navbar = () => {
  return (
   <header>
   <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <NavLink to="/"><img src={logo} style={{width:50,height:40}}alt="imag"/></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to="/" style={{textDecoration: 'none'}}><a className="nav-link active" aria-current="page" href="#">Home</a></NavLink>
          </li>
          
        </ul>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link name" aria-current="page" href="#">user management system</a>
          </li>
          
        </ul>
       
        <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success text-dark" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
   </header>
  )
}

export default Navbar