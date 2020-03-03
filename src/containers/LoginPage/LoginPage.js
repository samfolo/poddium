import React from 'react';
import Classes from './LoginPage.module.css';

class LoginPage extends React.Component {
  render() {
    return <div className={Classes.LoginPage} data-test="component-login-page">
      <div data-test="sign-up">Sign up</div>
      <div data-test="sign-in">Sign in</div>
    </div>
  }
}

export default LoginPage;
