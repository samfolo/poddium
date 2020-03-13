import React from 'react';
import Classes from './LoginPage.module.css';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import { Redirect } from 'react-router-dom';
import * as actionCreators from '../../store/actions';
import { connect } from 'react-redux';
import AuthForm from '../../components/AuthForm/AuthForm';
import Spotify from '../../util/Spotify/Spotify';
import ShowList from '../../components/ShowList/ShowList';
import NavBar from '../../components/NavBar/NavBar';
import PageHeading from '../../components/UI/PageHeading/PageHeading';

export class LoginPage extends React.Component {
  state = {
    isSignIn: false,
    isLogin: false,
    res: null,
    searchResults: null,
  }

  componentDidMount() {
    Spotify.search('podcast', '/login')
    .then(genericResults => {
      this.setState({ searchResults: genericResults });
    });
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

    const buttons = this.state.isLogin || this.state.isSignUp ? null : [
      <div key="sign-up" className={Classes.Option} data-test="sign-up" onClick={this.toggleSignUp}>Sign up</div>,
      <div key="sign-in" className={Classes.Option} data-test="sign-in" onClick={this.toggleLogin}>Sign in</div>,
    ]

    return <div className={Classes.LoginPage} data-test="component-login-page">
      {this.props.isAuth ? <Redirect to='/' /> : null}
      {this.props.testLoadedShow ? <Redirect to={`/shows/${this.props.testLoadedShow.name}`} /> : null}
      <PageHeading>Log in</PageHeading>
      {signInForm}
      {signUpForm}
      {buttons}
      {this.state.searchResults ? <ShowList shows={this.state.searchResults} route='/login' onClick={this.props.onGetTestShows} /> : null}
      {/* <button onClick={(e) => this.testClick(e)}>CLICK FOR SPOTIFY DATA (DELETE LATER)</button> */}
      <NavBar data-test="navbar" />
    </div>
  }
}

const mapStateToProps = state => {
  return {
    isInvalidSignUp: state.user.isInvalidSignUp,
    isInvalidLogin: state.user.isInvalidLogin,
    isAuth: state.user.isAuthenticated,
    testLoadedShow: state.podcast.showLoaded,
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
