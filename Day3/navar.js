import React from "react"
import "./navbar.css"

const Navbar=()=>{
    return(    <div className="navbar-container">      <div className="navbar-wrapper">      <div className="logo">      <h3>React</h3>      </div>      <div className="menu-container">      <div className="menu-wrapper">      <div className="menu">Home</div>      <div className="menu">About</div>      <div className="menu">Price</div>            </div>      </div>      </div>    </div>  )
}

export default Navbar

