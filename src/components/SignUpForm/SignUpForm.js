import React from 'react';
import Classes from './SignUpForm.module.css';

import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';

class SignUpForm extends React.Component {
  state = {
    formData: {
      username: {
        value: '',
      },
      email: {
        value: '',
      },
      password: {
        value: '',
      },
      passwordConfirmation: {
        value: '',
      },
    }
  }

  handleChange = () => {
    
  }

  renderInputs = () => {
    const fields = Object.keys(this.state.formData);
    return fields.map((field, i) => (
      <Input
        key={`${i}_signUpInput`}
        data-test={`input-${field}`}
        onChange={(e) => this.handleChange(e, field)}
        value={this.state.formData[field].value}
      />
    ));
  }

  handleClick = () => {
    this.props.onSubmit();
  }

  render() {
    return (
      <div className={Classes.SignUpForm} data-test="component-sign-up-form">
        {this.renderInputs()}

        <Button data-test="submit-form-sign-up" onClick={this.handleClick} />
      </div>
    );
  }
}

export default SignUpForm;
