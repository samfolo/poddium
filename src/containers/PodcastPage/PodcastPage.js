import React from 'react';
import Classes from './PodcastPage.module.css';
import Spotify from '../../util/Spotify/Spotify';
import EpisodeList from '../../components/EpisodeList/EpisodeList';
import { connect } from 'react-redux';

class PodcastPage extends React.Component {
  state = {
    episodes: [],
  }

  componentDidMount() {
    this.setState({ episodes: this.props.episodes });
  }

  render() {
    return (
      <div className={Classes.PodcastPage} data-test="component-podcast-page">
        <div data-test="show-display" />
        <EpisodeList
          data-test="episode-list"
          episodes={this.state.episodes}
          route='/:name/episodes' />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    episodes: state.podcast.episodes,
  }
}

export default connect(mapStateToProps)(PodcastPage);
