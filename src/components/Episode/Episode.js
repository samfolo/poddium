import React from 'react';
import Classes from './Episode.module.css';

const Episode = props => {
  return (
    <div className={Classes.Episode} data-test="component-episode">
      <img className={Classes.Image} src={props.image.url} alt={props.name} data-test="image" />
      <div className={Classes.NameContainer}><div className={Classes.Name} data-test="name">{props.name}</div></div>
      {/* <div className={Classes.Description}>{props.description}</div> */}
      {/* <div className={Classes.ReleaseDate}>{props.release_date}</div> */}
      <audio className={Classes.AudioPreview} src={props.audio_preview_url} />
    </div>
  );
}

export default Episode;
