import React from 'react';

const Logo = props => {
  return (
    <div data-test="component-logo">
      <img 
        src="/poddium-logo.svg" 
        data-test="logo-svg" 
        alt="poddium logo"
        style={{ 
          width: `${props.size}vw`, 
          height: `${props.size}vw`
        }} />
    </div>
  );
}

export default Logo;
