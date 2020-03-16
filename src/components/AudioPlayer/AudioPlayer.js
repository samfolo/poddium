import React from 'react';
import Classes from './AudioPlayer.module.css';

class AudioPlayer extends React.Component {
  render() {
    return (
      <div className={Classes.AudioPlayer} data-test="component-audio-player">
        <div data-test="play-button"></div>
      </div>
    );
  }
}

export default AudioPlayer;
