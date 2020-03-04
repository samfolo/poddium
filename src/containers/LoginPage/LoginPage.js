import React from 'react';
import Classes from './LoginPage.module.css';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import { Redirect } from 'react-router-dom';
import * as actionCreators from '../../store/actions';
import { connect } from 'react-redux';

export class LoginPage extends React.Component {
  state = {
    isSignIn: false,
    isSignUp: false,
    isAuthenticated: false,
  }

  handleSignUp = user => {
    this.props.onSignUp(user);
    this.setState({ isAuthenticated: true })
  };

  toggleSignUp = () => this.setState(prevState => ({ isSignUp: !prevState.isSignUp }));

  render() {
    const signInForm = this.state.isSignIn ? <div data-test="sign-in-form" /> : null;
    const signUpForm = this.state.isSignUp ? <SignUpForm data-test="sign-up-form" onSubmit={this.handleSignUp} /> : null;

    const buttons = this.state.isSignIn || this.state.isSignUp ? null : [
      <div key="sign-up" data-test="sign-up" onClick={this.toggleSignUp}>Sign up</div>,
      <div key="sign-in" data-test="sign-in">Sign in</div>,
    ]

    return <div className={Classes.LoginPage} data-test="component-login-page">
      {this.state.isAuthenticated ? <Redirect to='/' /> : null}
      {signInForm}
      {signUpForm}
      {buttons}
    </div>
  }
}

const mapDispatchToProps =  dispatch => {
  return {
    onSignUp: user => dispatch(actionCreators.storeUser(user)),
  }
}

export default connect(null, mapDispatchToProps)(LoginPage);
