import React from 'react';
import Classes from './EpisodeList.module.css';
import { Redirect } from 'react-router';
import Episode from '../Episode/Episode';

class EpisodeList extends React.Component {
  renderEpisodes = () => {
    const episodes = this.props.episodes;
    const episodeComponents = episodes.map((episode, i) => {
      return (
        <Episode
          key={episode.id}
          id={episode.id}
          name={episode.name}
          image={episode.image}
          description={episode.description}
          release_date={episode.release_date}
          audio_preview_url={episode.audio_preview_url}
          uri={episode.uri}
          data-test="episode" />
      );
    });
    return episodeComponents;
  }

  render() {
    return (
      <div className={Classes.EpisodeList} data-test="component-episode-list">
        {this.props.loadedShow ? <Redirect to={`/shows/${this.props.loadedShow.name}`} /> : null}
        {this.renderEpisodes()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loadedShow: state.podcast.showLoaded,
  }
}

export default EpisodeList;
