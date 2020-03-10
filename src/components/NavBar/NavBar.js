import React from 'react';
import Classes from './NavBar.module.css';

class NavBar extends React.Component {
  render() {
    return (
      <div className={Classes.NavBar} data-test="component-navbar" />
    )
  }
}

export default NavBar;
