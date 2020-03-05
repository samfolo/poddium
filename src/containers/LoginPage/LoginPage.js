import React from 'react';
import Classes from './LoginPage.module.css';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import { Redirect } from 'react-router-dom';
import * as actionCreators from '../../store/actions';
import { connect } from 'react-redux';
import AuthForm from '../../components/AuthForm/AuthForm';

export class LoginPage extends React.Component {
  state = {
    isSignIn: false,
    isLogin: false,
  }

  handleSignUp = async newUserData => {
    this.props.onSignUp(newUserData);
  };

  toggleSignUp = () => this.setState(prevState => ({ isSignUp: !prevState.isSignUp }));
  toggleLogin = () => this.setState(prevState => ({ isLogin: !prevState.isLogin }))

  render() {
    const signInForm = this.state.isLogin ? <AuthForm data-test="login-form" /> : null;
    const signUpForm = this.state.isSignUp ? <SignUpForm 
      data-test="sign-up-form"
      onSubmit={this.handleSignUp}
      isInvalidSignUp={this.props.isInvalidSignUp}
      onInvalidSignUp={this.props.onInvalidSignUp} /> : null;

    const buttons = this.state.isLogin || this.state.isSignUp ? null : [
      <div key="sign-up" data-test="sign-up" onClick={this.toggleSignUp}>Sign up</div>,
      <div key="sign-in" data-test="sign-in" onClick={this.toggleLogin}>Sign in</div>,
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
