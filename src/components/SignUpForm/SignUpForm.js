import React from 'react';
import Classes from './SignUpForm.module.css';

class SignUpForm extends React.Component {
  render() {
    return (
      <div className={Classes.SignUpForm} data-test="component-sign-up-form" />
    );
  }
}

export default SignUpForm;
