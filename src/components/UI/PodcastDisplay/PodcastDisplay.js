import React from 'react';
import Classes from './PodcastDisplay.module.css';

const PodcastDisplay = props => {
  let opacity = '0';
  if (props.overlayImage) opacity = props.isHover ? '1' : '0';
  
  return (
    <div
      data-test="component-podcast-display"
      style={{ 
        width: props.size,
        height: props.size,
        borderRadius: props.borderRadius,
        overflow: props.overflow }}>
      <div 
        data-test="image-container" 
        onClick={props.onClick}
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}
        className={Classes.ImageContainer}
        style={{ background: `url(${props.imageURL}) no-repeat center center`, backgroundSize: 'cover' }}>
          <img 
            data-test="overalay-image"
            className={Classes.Icon}
            src={props.overlayImage}
            alt={props.alt}
            style={{ opacity, overflow: props.overflow }} onMouseOver={props.onMouseOver} />
      </div>
    </div>
  );
}

export default PodcastDisplay;
