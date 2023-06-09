import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
  return (
    <header>
      <img src="https://i.postimg.cc/0j7nP7Tq/ladip-logo.png" alt="Ladip logo" />

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