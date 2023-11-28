import './NavItem.css'

import React from 'react'

const NavItem = (props) => {
  return (
    <li class="nav-item">
         {props.children}
        </li>  
  )
}

export default NavItem

