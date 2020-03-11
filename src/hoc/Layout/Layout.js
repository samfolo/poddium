import React from 'react';
import Classes from './Layout.module.css';
import NavBar from '../../components/NavBar/NavBar';

class Layout extends React.Component {
  render() {
    return (
      <div data-test="component-layout" className={Classes.Layout}>
        <div className={Classes.Children}>{this.props.children}</div>
      </div>
    );
  }
}

export default Layout;
