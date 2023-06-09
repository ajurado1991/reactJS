import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
  return (
    <header>
      <h1>LADIP Online</h1>

      <nav>
        <ul>
          <li>Living</li>
          <li>Dining</li>
          <li>Bed</li>
          <li>Lighting</li>
          <li>Textiles</li>
          <li>Outdoor</li>
          <li>Projects</li>
          <li>About</li>
        </ul>
      </nav>

      <CartWidget/>
    </header>
  )
}

export default NavBar