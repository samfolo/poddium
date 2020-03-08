import React from 'react';
import Classes from './PodcastDisplay.module.css';

const PodcastDisplay = props => {
  return (
    <div data-test="component-podcast-display">
      <div 
        data-test="image" 
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}
        className={Classes.ImageContainer}
        style={{ background: `url(${props.imageURL}) no-repeat center center`, backgroundSize: 'cover'  }}>
          <img 
            className={Classes.Icon}
            src="podcast-microphone-overlay.png"
            alt={props.alt}
            style={{ opacity: props.isHover ? '1' : '0' }} onMouseOver={props.onMouseOver} />
      </div>
    </div>
  );
}

export default PodcastDisplay;
