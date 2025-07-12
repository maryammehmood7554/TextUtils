// rfc
import React from 'react'
// impt  
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom' and use Link instead of a and to insted of href and # with /

let name="Maryam";
const element = <a href="https://www.reactjs.org"> link </a>;

// export default function Navbar({ title = "Set title here", service = "Type Services" }) {
    export default function Navbar(props) {
  return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} px-3 py-2`}>
  <div className="container-fluid">
    <div className="navbar-brand fs-5 fw-semibold">{props.title}{name}</div>
    {/* <div className="navbar-brand fs-5 fw-semibold">{title}{name}</div> */}
    <ul className="nav nav-pills align-items-center gap-3 nav-links flex-lg-row flex-column mt-3 mt-lg-0 mb-0 ms-lg-auto">
      <li className="nav-item">
        <a className="nav-link px-2 py-1" href="#">Home</a>
      </li>
      {/* <li className="nav-item">
        <a className="nav-link px-2 py-1" to="/about">About</a> 
      </li> */}
      <li className="nav-item">
        <a className="nav-link px-2 py-1" href="#">{props.service}</a>
      </li>
      <li className="nav-item">
        <a className="nav-link px-2 py-1" href="#">Contact</a>
      </li>
      <li className="nav-item">
        {element}
      </li>
      <form className="d-flex mt-2 mt-lg-0" role="search">
        <input className="form-control form-control-sm me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-light btn-sm" type="submit">Search</button>
      </form>
      {/* {` `} template literals */}
  <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark': 'light'}`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="SwitchCheck" />
  <label className="form-check-label" htmlFor="SwitchCheck">Switch Mode</label>
</div>
  <div className={`form-check form-switch color text-${props.mode === 'light' ? 'dark': 'light'}`}>
  <input className="form-check-input" onClick={props.toggle} type="checkbox" id="Switch" />
  <label className="form-check-label" htmlFor="Switch">Switch Color Mode</label>
</div>

    </ul>
  </div>
</nav>
  )
}

Navbar.propTypes = {
    title: PropTypes.string,
    service: PropTypes.string.isRequired
}

// Navbar.defaultProps={
//     title :"Set title here",
//     service : "Type Services"
// }