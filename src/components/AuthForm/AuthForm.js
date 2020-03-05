import React from 'react';
import Classes from './AuthForm.module.css';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';

class AuthForm extends React.Component {
  state = {
    formData: {
      email: {
        value: '',
        config: {

        },
      },
      password: {
        value: '',
        config: {

        },
      },
    },
  }

  renderInputs = () => {
    const fields = Object.keys(this.state.formData);
    const inputs = fields.map((field, i) => {
      return (
        <Input 
        key={`${i}_authFormInput`}
        data-test={`input-${field}`} />
      );
    });

    return inputs;
  }

  render() {
    return (
      <div className={Classes.AuthForm} data-test="component-auth-form">
        {this.renderInputs()}
        <Button data-test="submit-form-auth" />
      </div>
    );
  }
}

export default AuthForm;
