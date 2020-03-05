import React from 'react';
import Classes from './AuthForm.module.css';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';

class AuthForm extends React.Component {
  render() {
    return (
      <div className={Classes.AuthForm} data-test="component-auth-form">
        <Input data-test="input-email" />
        <Input data-test="input-password" />
        <Button data-test="submit-form-auth" />
      </div>
    );
  }
}

export default AuthForm;
