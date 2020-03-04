import React from 'react';
import Classes from './ProfilePage.module.css';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

export class ProfilePage extends React.Component {
  render() {
    const isLoggedIn = this.props.info;

    return (
      <div className={Classes.ProfilePage} data-test="component-profile-page">
        {isLoggedIn ? null : <Redirect to='/login' />}
        {this.props.info.username}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    info: state.user.info,
  }
}

export default connect(mapStateToProps)(ProfilePage);
