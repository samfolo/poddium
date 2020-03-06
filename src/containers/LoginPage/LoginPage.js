import React from 'react';
import Classes from './LoginPage.module.css';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import { Redirect } from 'react-router-dom';
import * as actionCreators from '../../store/actions';
import { connect } from 'react-redux';
import AuthForm from '../../components/AuthForm/AuthForm';
import Spotify from '../../util/Spotify/Spotify';

export class LoginPage extends React.Component {
  state = {
    isSignIn: false,
    isLogin: false,
    res: null,
  }

  handleSignUp = newUserData => {
    this.props.onSignUp(newUserData);
  }

  handleLogin = loginData => {
    this.props.onLogin(loginData);
  }

  toggleSignUp = () => this.setState(prevState => ({ isSignUp: !prevState.isSignUp }));
  toggleLogin = () => this.setState(prevState => ({ isLogin: !prevState.isLogin }))

  testClick = (e) => {
    Spotify.search('dffrnce')
    .then(response => this.setState({ res: response }))
  }

  render() {
    const signInForm = this.state.isLogin ? <AuthForm 
      data-test="login-form"
      onSubmit={this.handleLogin}
      isInvalidLogin={this.props.isInvalidLogin} /> : null;
      
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
      <button onClick={(e) => this.testClick(e)}>CLICK</button>
    </div>
  }
}

const mapStateToProps = state => {
  return {
    isInvalidSignUp: state.user.isInvalidSignUp,
    isInvalidLogin: state.user.isInvalidLogin,
    isAuth: state.user.isAuthenticated,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSignUp: newUserData => dispatch(actionCreators.createUser(newUserData)),
    onInvalidSignUp: () => dispatch(actionCreators.invalidSignUp()),
    onLogin: loginData => dispatch(actionCreators.authoriseUser(loginData)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
