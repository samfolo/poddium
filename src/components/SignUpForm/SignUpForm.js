import React from 'react';
import Classes from './SignUpForm.module.css';

import Input from '../UI/Input/Input';

class SignUpForm extends React.Component {
  render() {
    return (
      <div className={Classes.SignUpForm} data-test="component-sign-up-form">
        <Input data-test="input-username" />
        <Input data-test="input-email" />
        <Input data-test="input-password" />
        <Input data-test="input-passwordConfirmation" />

        <div data-test="submit-form-sign-up" />
      </div>
    );
  }
}

export default SignUpForm;
