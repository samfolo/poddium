import React from 'react';
import Classes from './ProfilePage.module.css';

class ProfilePage extends React.Component {
  render() {
    return (
      <div data-test="component-profile-page">
        {this.props.user.username === 'Sam' ? 'Sam' : 'Elodie'}
      </div>
    );
  }
}

export default ProfilePage;
