import React from 'react';
import Classes from './Button.module.css';

class Button extends React.Component {
  render() {
    return (
      <button
        type="submit"
        className={Classes.Button}
        data-test="component-button"
        onClick={this.props.onClick}>
          {this.props.children}
        </button>
    )
  }
}

export default Button;
