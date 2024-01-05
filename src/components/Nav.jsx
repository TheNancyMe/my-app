import React from 'react';
import classes from'./Nav.module.css';


let s = {
  'nav': 'Nav_nav__3xcTU',
  'item': 'Nav_item__fYr5U '
}

const Nav = () => {
  return (
     <nav className= {s.nav}>
    <div className = {s.item}>
      <a href = '/profile'>Profile</a>
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