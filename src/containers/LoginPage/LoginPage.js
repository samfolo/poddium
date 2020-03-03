import React from 'react';
import Classes from './LoginPage.module.css';

class LoginPage extends React.Component {
  state = {
    isSignIn: false,
  }

  render() {
    const signInForm = this.state.isSignIn ? <div data-test="sign-in-form" /> : null;

    return <div className={Classes.LoginPage} data-test="component-login-page">
      {signInForm}
      <div data-test="sign-up">Sign up</div>
      <div data-test="sign-in">Sign in</div>
    </div>
  }
}

export default LoginPage;
