import React from 'react'

import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    
    <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
    <div className="container">
      <Link className="navbar-brand" to="/">Video Game Library</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    </div>
    </nav>
  )
}

export default NavBar