import React from 'react';
import Classes from './SignUpForm.module.css';

import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';

class SignUpForm extends React.Component {
  handleClick = () => {
    this.props.onSubmit();
  }

  render() {
    return (
      <div className={Classes.SignUpForm} data-test="component-sign-up-form">
        <Input data-test="input-username" />
        <Input data-test="input-email" />
        <Input data-test="input-password" />
        <Input data-test="input-passwordConfirmation" />

        <Button data-test="submit-form-sign-up" onClick={this.handleClick} />
      </div>
    );
  }
}

export default SignUpForm;
