import React from 'react';
import Classes from './Button.module.css';

class Button extends React.Component {
  render() {
    return (
      <button 
        className={Classes.Button}
        data-test="component-button"
        onClick={this.props.onClick} />
    )
  }
}

export default Button;
