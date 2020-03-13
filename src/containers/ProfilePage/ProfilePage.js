import React from 'react';
import Classes from './ProfilePage.module.css';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import Button from '../../components/UI/Button/Button';
import * as actionCreators from '../../store/actions';
import NavBar from '../../components/NavBar/NavBar';

export class ProfilePage extends React.Component {
  render() {
    let component = <Redirect to="/login" />;

    if (this.props.isAuth) {
      component = (
        <div className={Classes.ProfilePage} data-test="component-profile-page">
          {this.props.info.username}
          <Button data-test="log-out" onClick={this.props.onLogOut}>Log out</Button>
          <Button data-test="explore" onClick={() => window.location = '/explore'}>Explore</Button>
          <NavBar data-test="navbar" />
        </div>
      )
    }
    
    return component;
  }
}

const mapStateToProps = state => {
  return {
    isAuth: state.user.isAuthenticated,
    info: state.user.info,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogOut: () => dispatch(actionCreators.logOut()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
