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
  }

  handleSignUp = newUserData => {
    this.props.onSignUp(newUserData);
  };

  toggleSignUp = () => this.setState(prevState => ({ isSignUp: !prevState.isSignUp }));

  render() {
    const signInForm = this.state.isSignIn ? <div data-test="sign-in-form" /> : null;
    const signUpForm = this.state.isSignUp ? <SignUpForm 
      data-test="sign-up-form"
      onSubmit={this.handleSignUp}
      isInvalidSignUp={this.props.isInvalidSignUp}
      onInvalidSignUp={this.props.onInvalidSignUp} /> : null;

    const buttons = this.state.isSignIn || this.state.isSignUp ? null : [
      <div key="sign-up" data-test="sign-up" onClick={this.toggleSignUp}>Sign up</div>,
      <div key="sign-in" data-test="sign-in">Sign in</div>,
    ]

    return <div className={Classes.LoginPage} data-test="component-login-page">
      {this.props.isAuth ? <Redirect to='/' /> : null}
      {signInForm}
      {signUpForm}
      {buttons}
    </div>
  }
}

const mapStateToProps = state => {
  return {
    isInvalidSignUp: state.user.isInvalidSignUp,
    isAuth: state.user.isAuthenticated,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSignUp: user => dispatch(actionCreators.createUser(user)),
    onInvalidSignUp: () => dispatch(actionCreators.invalidSignUp()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
