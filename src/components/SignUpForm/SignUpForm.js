import React from 'react';
import Classes from './SignUpForm.module.css';
import { emailRegex } from '../../util';

import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';

class SignUpForm extends React.Component {
  state = {
    formData: {
      username: {
        value: '',
        config: {
          required: true,
        },
      },
      email: {
        value: '',
        config: {
          required: true,
        },
      },
      password: {
        value: '',
        config: {
          required: true,
          type: 'password',
        },
      },
      passwordConfirmation: {
        value: '',
        config: {
          required: true,
          type: 'password',
        },
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

  handleSubmit = async () => {
    if (this.isValidSignUp()) {
      const data = this.state.formData;
      const payload = { 
        username: data.username.value,
        email: data.email.value,
        password: data.password.value,
      }
      await this.props.onSubmit(payload);
    } else {
      this.props.onInvalidSignUp();
    }
  }

  isValidSignUp = () => {
    const form = this.state.formData;
    const passwordsMatch = form.password.value === form.passwordConfirmation.value;
    const validEmailGiven = emailRegex.test(this.state.formData.email.value);
    
    // check for no empty fields
    let noEmptyFields = true;
    const fields = Object.keys(this.state.formData);
    fields.forEach(field => noEmptyFields = noEmptyFields && this.state.formData[field].value !== '');

    return passwordsMatch && validEmailGiven && noEmptyFields;
  }

  renderInputs = () => {
    const fields = Object.keys(this.state.formData);
    return fields.map((field, i) => (
      <Input
        key={`${i}_signUpInput`}
        data-test={`input-${field}`}
        onChange={(e) => this.handleChange(e, field)}
        value={this.state.formData[field].value}
        config={this.state.formData[field].config} />
    ));
  }

  render() {
    return (
      <div className={Classes.SignUpForm} data-test="component-sign-up-form">
        <div className={Classes.Inputs}>{this.renderInputs()}</div>

        <Button 
          data-test="submit-form-sign-up"
          width={70}
          height={17}
          fontSize={10}
          onClick={this.handleSubmit}>Submit</Button>
        {this.props.isInvalidSignUp ? <div>Invalid Signup</div> : null}
      </div>
    );
  }
}

export default SignUpForm;
