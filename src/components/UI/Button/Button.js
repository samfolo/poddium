import React from 'react';
import Classes from './Button.module.css';

class Button extends React.Component {
  handleClick = async () => {
    await this.props.onClick();
  }

  render() {
    const style = {
      width: `${this.props.width}vw`,
      height: `${this.props.height}vw`,
      fontSize: `${this.props.fontSize}vw`,
    }

    return (
      <button
        type="submit"
        className={Classes.Button}
        data-test="component-button"
        onClick={this.handleClick}
        style={style}>
          <div className={Classes.Text}>
            {this.props.children}
          </div>
        </button>
    )
  }
}

export default Button;
