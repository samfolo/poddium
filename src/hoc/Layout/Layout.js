import React from 'react';
import Classes from './Layout.module.css';
import NavBar from '../../components/NavBar/NavBar';

class Layout extends React.Component {
  render() {
    return (
      <div data-test="component-layout">
        {this.props.children}
        <NavBar data-test="navbar" />
      </div>
    );
  }
}

export default Layout;
