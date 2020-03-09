import React from 'react';
import Classes from './PodcastPage.module.css';
import EpisodeList from '../../components/EpisodeList/EpisodeList';
import { connect } from 'react-redux';
import Show from '../../components/Show/Show';

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
        <Show 
          marginBottom="0"
          data-test="show-display"
          name={this.props.show.name}
          image={this.props.show.image}
          overlayImage="/null-overlay.png"
          description={this.props.show.description}
          publisher={this.props.show.publisher} />
        <div className={Classes.EpisodeListContainer}>
          <EpisodeList
            data-test="episode-list"
            episodes={this.state.episodes}
            route='/shows/:name' />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    episodes: state.podcast.episodes,
    show: state.podcast.showLoaded
  }
}

export default connect(mapStateToProps)(PodcastPage);
