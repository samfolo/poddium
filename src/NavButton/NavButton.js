import React from 'react';
import { NavLink } from 'react-router-dom';

const NavButton = props => {
  return (
    <li data-test="component-nav-button">
      <NavLink to={props.link} exact data-test="navlink" />
    </li>
  )
}

export default NavButton;
