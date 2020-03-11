import React from 'react';
import Classes from './NavBar.module.css';
import NavButton from '../NavButton/NavButton';

class NavBar extends React.Component {
  render() {
    return (
      <ul className={Classes.NavBar} data-test="component-navbar">
        <NavButton data-test="home-navlink" link="/explore">Home</NavButton>
        <NavButton data-test="search-navlink" link="/search">Search</NavButton>
        <NavButton data-test="profile-navlink" link="/">Profile</NavButton>
      </ul>
    )
  }
}

export default NavBar;
