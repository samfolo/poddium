import React from 'react';
import Classes from './AudioPlayer.module.css';

class AudioPlayer extends React.Component {
  render() {
    return (
      <div className={Classes.AudioPlayer} data-test="component-audio-player" />
    );
  }
}

export default AudioPlayer;
