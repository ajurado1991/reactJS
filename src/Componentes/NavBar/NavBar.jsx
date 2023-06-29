import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <header>

      <Link to='/'>
        <img src="https://i.postimg.cc/0j7nP7Tq/ladip-logo.png" alt="Ladip logo" />
      </Link>

      <nav>
        <ul>
          <li>
            <NavLink to={'/categoria/2'}>Sillas</NavLink>
          </li>
          <li>
            <NavLink to={'/categoria/3'}>Poltronas</NavLink>
          </li>
          <li>
            <NavLink to={'/categoria/4'}>Mesas</NavLink>
          </li>
          <li>
            <NavLink to={'/categoria/5'}>Lamparas</NavLink>
          </li>

        </ul>
      </nav>

      <CartWidget/>
    </header>
  )
}

export default NavBar