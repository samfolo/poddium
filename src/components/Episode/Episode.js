import React, { useState } from 'react';
import Classes from './Episode.module.css';
import PodcastDisplay from '../UI/PodcastDisplay/PodcastDisplay';

const Episode = props => {
  const [showsIcon, setShowsIcon] = useState(false);

  const showIcon = () => {
    setShowsIcon(true);
  }

  const hideIcon = () => {
    setShowsIcon(false);
  }

  return (
    <div className={Classes.Episode} data-test="component-episode">
      <PodcastDisplay
        size="20vw"
        alt={props.name}
        data-test="episode-thumbnail"
        className={Classes.Image}
        imageURL={props.image.url} 
        isHover={showsIcon} 
        onMouseLeave={hideIcon} 
        onMouseEnter={showIcon}
        overlayImage="/play-button-overlay.png" />
      <div className={Classes.NameContainer}><div className={Classes.Name} data-test="name">{props.name}</div></div>
      {/* <div className={Classes.Description}>{props.description}</div> */}
      {/* <div className={Classes.ReleaseDate}>{props.release_date}</div> */}
      <audio className={Classes.AudioPreview} src={props.audio_preview_url} />
    </div>
  );
}

export default Episode;
