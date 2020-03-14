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
          type: 'password',
        },
      },
    },
  }

  handleChange = (e, field) => {
    let formData = {...this.state.formData};
    let updatedField = {...formData[field]};
    updatedField.value = e.target.value;
    formData[field] = updatedField;

    this.setState({ formData });
  }

  handleSubmit = async () => {
    const data = this.state.formData;
    const payload = { 
      email: data.email.value,
      password: data.password.value,
    }

    await this.props.onSubmit(payload);
  }

  renderInputs = () => {
    const fields = Object.keys(this.state.formData);
    const inputs = fields.map((field, i) => {
      return (
        <Input 
        key={`${i}_authFormInput`}
        data-test={`input-${field}`}
        config={this.state.formData[field].config}
        value={this.state.formData[field].value}
        onChange={(e) => this.handleChange(e, field)} />
      );
    });

    return inputs;
  }

  render() {
    return (
      <div className={Classes.AuthForm} data-test="component-auth-form">
        <div className={Classes.Inputs}>{this.renderInputs()}</div>
        <Button 
          data-test="submit-form-auth"
          width={70}
          height={17}
          fontSize={10}
          onClick={this.handleSubmit}>Log in</Button>
        {this.props.isInvalidLogin ? <div>Invalid Login</div> : null}
      </div>
    );
  }
}

export default AuthForm;
