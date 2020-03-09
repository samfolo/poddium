import React from 'react';
import Classes from './PodcastDisplay.module.css';

const PodcastDisplay = props => {  
  return (
    <div data-test="component-podcast-display" style={{ width: props.size, height: props.size, borderRadius: props.borderRadius, overflow: 'hidden' }}>
      <div 
        data-test="image" 
        onClick={props.onClick}
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}
        className={Classes.ImageContainer}
        style={{ background: `url(${props.imageURL}) no-repeat center center`, backgroundSize: 'cover' }}>
          <img 
            className={Classes.Icon}
            src={props.overlayImage}
            alt={props.alt}
            style={{ opacity: props.isHover ? '1' : '0' }} onMouseOver={props.onMouseOver} />
      </div>
    </div>
  );
}

export default PodcastDisplay;
