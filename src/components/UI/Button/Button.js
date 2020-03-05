import React from 'react';
import Classes from './Button.module.css';

class Button extends React.Component {
  handleClick = async () => {
    await this.props.onClick();
  }

  render() {
    return (
      <button
        type="submit"
        className={Classes.Button}
        data-test="component-button"
        onClick={this.handleClick}>
          {this.props.children}
        </button>
    )
  }
}

export default Button;
