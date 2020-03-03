import React from 'react';
import Classes from './LoginPage.module.css';

class LoginPage extends React.Component {
  state = {
    isSignIn: false,
    isSignUp: false,
  }

  render() {
    const signInForm = this.state.isSignIn ? <div data-test="sign-in-form" /> : null;
    const signUpForm = this.state.isSignUp ? <div data-test="sign-up-form" /> : null;
    const buttons = this.state.isSignIn || this.state.isSignUp ? null : [
      <div key="sign-up" data-test="sign-up">Sign up</div>,
      <div key="sign-in" data-test="sign-in">Sign in</div>,
    ]

    return <div className={Classes.LoginPage} data-test="component-login-page">
      {signInForm}
      {signUpForm}
      {buttons}
    </div>
  }
}

export default LoginPage;
