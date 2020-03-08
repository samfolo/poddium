import React, { useState } from 'react';
import Classes from './Show.module.css';
import PodcastDisplay from '../UI/PodcastDisplay/PodcastDisplay';

const Show = props => {
  const [showsIcon, setShowsIcon] = useState(false);
  
  const showIcon = () => {
    setShowsIcon(true);
  }

  const hideIcon = () => {
    setShowsIcon(false);
  }

  return (
    <div 
      className={Classes.Show} 
      data-test="component-show" style={{ background: `url(${props.image.url}) no-repeat center center fixed`, backgroundSize: 'cover' }}>
      <div className={Classes.Container}>
        <div className={Classes.Content}>
          <h1 data-test="name" className={Classes.Name}>{props.name}</h1>
          <div data-test="publisher" className={Classes.Publisher}>{props.publisher}</div>
          <PodcastDisplay 
            data-test="image" 
            onMouseLeave={hideIcon} 
            onMouseEnter={showIcon} 
            isHover={showsIcon} 
            imageURL={props.image.url} 
            alt={props.name} />
          <div data-test="description" className={Classes.Description}>{props.description}</div>
        </div>
      </div>
    </div>
  )
}

export default Show;