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

  handleChange = (e, field) => {
    const formData = {...this.state.formData};
    const targetField = {...formData[field]};
    targetField.value = e.target.value;
    formData[field] = targetField;
    this.setState({ formData })
  }

  handleSubmit = () => {
    const data = this.state.formData;
    
    const payload = { 
      username: data.username.value,
      email: data.email.value,
      password: data.password.value,
      passwordConfirmation: data.passwordConfirmation.value,
    }

    this.props.onSubmit(payload);
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

        <Button data-test="submit-form-sign-up" onClick={this.handleSubmit} />
      </div>
    );
  }
}

export default SignUpForm;
