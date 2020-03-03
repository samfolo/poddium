import React from 'react';
import Classes from './LoginPage.module.css';

class LoginPage extends React.Component {
  render() {
    return <div className={Classes.LoginPage} data-test="component-login-page" />
  }
}

export default LoginPage;
