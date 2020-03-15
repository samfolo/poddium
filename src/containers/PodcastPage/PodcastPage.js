import React from 'react';
import Classes from './PodcastPage.module.css';
import EpisodeList from '../../components/EpisodeList/EpisodeList';
import { connect } from 'react-redux';
import Show from '../../components/Show/Show';
import NavBar from '../../components/NavBar/NavBar';

export class PodcastPage extends React.Component {
  state = {
    episodes: [],
  }

  componentDidMount() {
    this.setState({ episodes: this.props.episodes });
  }

  render() {
    return (
      <div className={Classes.PodcastPage} data-test="component-podcast-page">
        <div className={Classes.Header}>
          <Show
            size="48vw"
            borderRadius={16}
            marginBottom="0"
            data-test="show-display"
            name={this.props.show.name}
            image={this.props.show.image}
            overlayImage="/null-overlay.png"
            description={this.props.show.description}
            publisher={this.props.show.publisher} />
        </div>

        <div className={Classes.EpisodeListContainer}>
          <EpisodeList
            data-test="episode-list"
            episodes={this.state.episodes}
            route='/shows/:name' />
        </div>
        <NavBar data-test="navbar" />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    episodes: state.podcast.loadedEpisodes,
    show: state.podcast.loadedShow
  }
}

export default connect(mapStateToProps)(PodcastPage);
