import React from 'react';
import classes from'./Nav.module.css';
import { NavLink } from 'react-router-dom';


let s = {
  'nav': 'Nav_nav__3xcTU',
  'item': 'Nav_item__fYr5U '
}

const Nav = () => {
  return (
     <nav className= {s.nav}>
    <div className = {s.item}>
      <NavLink to= '/profile'>Profile</NavLink>
    </div>
    <div className = {s.item}>
      <a href = '/dialogs'>Messages</a>
    </div>
    <div className = {s.item}>
      <a href = '/news'>News</a>
    </div>
    <div className = {s.item}>
      <a href = '/settings'>Settings</a>
    </div>

  </nav>
  )
}

export default Nav;