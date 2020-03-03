import React from 'react';
import Classes from './Input.module.css';

class Input extends React.Component {
  render() {
    return (
      <div className={Classes.Input} data-test="component-input" />
    );
  }
}

export default Input;
