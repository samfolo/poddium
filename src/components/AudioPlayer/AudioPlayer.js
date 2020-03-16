import React from 'react';
import Classes from './AudioPlayer.module.css';
import { register } from '../../serviceWorker';

class AudioPlayer extends React.Component {
  state = {
    hasEpisodeLoaded: false,
    isPlaying: false,
  }

  componentDidMount() {
    if (this.props.episode) {
      this.setState({ hasEpisodeLoaded: true });
    } else {
      this.setState({ hasEpisodeLoaded: false });
    }
  }

  play = () => {
    let audio = new Audio();
    audio.src = this.props.episode.url;
    audio.play();
    this.setState({ isPlaying: true });
  }

  render() {
    let playbackControls = <div data-test="play-button" onClick={this.play}></div>;
    let episodeTitle = null;

    if (this.state.isPlaying) {
      playbackControls = <div data-test="pause-button"></div>;
      episodeTitle = <div data-test="episode-name">{this.props.episode.name}</div>
    }

    return (
      <div className={Classes.AudioPlayer} data-test="component-audio-player">
<       div className={Classes.Button}>
          {playbackControls}
          {episodeTitle}
        </div>
      </div>
    );
  }
}

export default AudioPlayer;
