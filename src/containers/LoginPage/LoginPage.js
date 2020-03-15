import React from 'react';
import Classes from './LoginPage.module.css';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import { Redirect } from 'react-router-dom';
import * as actionCreators from '../../store/actions';
import { connect } from 'react-redux';

import AuthForm from '../../components/AuthForm/AuthForm';
import Spotify from '../../util/Spotify/Spotify';
import PageHeading from '../../components/UI/PageHeading/PageHeading';
import Logo from '../../components/UI/Logo/Logo';
import Button from '../../components/UI/Button/Button';
import Aux from '../../hoc/Aux/Aux';

export class LoginPage extends React.Component {
  state = {
    isSignIn: false,
    isLogin: false,
    res: null,
    searchResults: null,
  }

  componentDidMount() {}

  handleSignUp = newUserData => {
    this.props.onSignUp(newUserData);
  }

  handleLogin = loginData => {
    this.props.onLogin(loginData);
  }

  toggleSignUp = () => this.setState(prevState => ({ isSignUp: !prevState.isSignUp }));
  toggleLogin = () => this.setState(prevState => ({ isLogin: !prevState.isLogin }))

  testClick = (e) => {
    // Spotify.search('the art of dffrnce', '/login')
    Spotify.getEpisodesFor('the art of dffrnce', '/login');
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

    const buttons = this.state.isLogin || this.state.isSignUp ? null : (
      <div className={Classes.Buttons}>
        <Button 
          data-test="sign-up"
          width={70}
          height={17}
          fontSize={10}
          onClick={this.toggleSignUp}>Sign up</Button>
        <Button
          data-test="sign-in"
          width={70}
          height={17}
          fontSize={10}
          onClick={this.toggleLogin}>Sign in</Button>
      </div>
    );

    let header;

    switch (true) {
      case this.state.isLogin : header = (
          <Aux>
            <div className={Classes.LogoContainer}><Logo data-test="poddium-logo" size={40} /></div>
            <PageHeading>Log in</PageHeading>
          </Aux>
        ); break;
      case this.state.isSignUp : header = (
          <Aux>
            <div className={Classes.LogoContainer}><Logo data-test="poddium-logo" size={40} /></div>
            <PageHeading>Sign up</PageHeading>
          </Aux>
        ); break;
      default : header = <div className={Classes.LogoContainer}><Logo data-test="poddium-logo" size={40} /></div>
    }

    return (
      <div className={Classes.LoginPage} data-test="component-login-page">
        {this.props.isAuth ? <Redirect to='/' /> : null}
        <div className={Classes.Content}>
          {header}
          {signInForm}
          {signUpForm}
          {buttons}
        </div>
      </div>
    )
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
    onGetTestShows: (show, route) => dispatch(actionCreators.loadEpisodes(show, route)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
