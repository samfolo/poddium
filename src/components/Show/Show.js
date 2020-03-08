import React, { useState } from 'react';
import Classes from './Show.module.css';

const Show = props => {
  const [showsIcon, setShowsIcon] = useState(false);
  
  const showIcon = () => {
    setShowsIcon(true);
  }

  const hideIcon = () => {
    setShowsIcon(false);
  }

  return (
    <div className={Classes.Show} data-test="component-show" style={{ background: `url(${props.image.url}) no-repeat center center fixed`, backgroundSize: 'cover' }}>
      <div className={Classes.Container}>
        <div className={Classes.Content}>
          <h1 data-test="name" className={Classes.Name}>{props.name}</h1>
          <div data-test="publisher" className={Classes.Publisher}>{props.publisher}</div>
          <div 
            data-test="image" 
            onMouseEnter={showIcon}
            onMouseLeave={hideIcon}
            className={Classes.ImageContainer}
            style={{ background: `url(${props.image.url}) no-repeat center center`, backgroundSize: 'cover'  }}>
              <img 
                className={Classes.Icon}
                src="../../podcast-microphone-overlay.png"
                alt={props.name}
                style={{ opacity: showsIcon ? '1' : '0' }} onMouseOver={showIcon} />
          </div>
          <div data-test="description" className={Classes.Description}>{props.description}</div>
        </div>
      </div>
    </div>
  )
}

export default Show;