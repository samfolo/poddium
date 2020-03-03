import React from 'react';
import Classes from './SignUpForm.module.css';

class SignUpForm extends React.Component {
  render() {
    return (
      <div className={Classes.SignUpForm} data-test="component-sign-up-form">
        <div data-test="input-username" />
        <div data-test="input-email" />
        <div data-test="input-password" />
        <div data-test="input-passwordConfirmation" />
        <div data-test="submit-form-sign-up" />
      </div>
    );
  }
}

export default SignUpForm;
