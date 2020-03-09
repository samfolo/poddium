import React from 'react';
import Classes from './EpisodeList.module.css';

class EpisodeList extends React.Component {
  renderEpisodes = () => {
    const episodes = this.props.episodes;
    const episodeComponents = episodes.map((episode, i) => {
      return (
        <div
          key={episode.id}
          data-test="episode" />
      );
    });
    return episodeComponents;
  }

  render() {
    return (
      <div data-test="component-episode-list">
        {this.renderEpisodes()}
      </div>
    );
  }
}

export default EpisodeList;
