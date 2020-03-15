import React from 'react';
import { NavLink } from 'react-router-dom';
import Classes from './NavButton.module.css';

const NavButton = props => {
  return (
    <li data-test="component-nav-button" className={Classes.NavButton} onClick={props.onClick}>
      <NavLink to={props.link} exact data-test="component-navlink" className={Classes.NavLink}>{props.children}</NavLink>
    </li>
  )
}

export default NavButton;
