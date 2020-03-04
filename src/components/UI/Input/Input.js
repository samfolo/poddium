import React from 'react';
import Classes from './Input.module.css';

class Input extends React.Component {
  render() {
    return (
      <input 
        type="text"
        className={Classes.Input}
        data-test="component-input"
        required={this.props.config.required}
        onChange={this.props.onChange} />
    );
  }
}

export default Input;
