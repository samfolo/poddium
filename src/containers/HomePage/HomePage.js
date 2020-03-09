import React from 'react';
import Classes from './HomePage.module.css';
import Spotify from '../../util/Spotify/Spotify';
import ShowList from '../../components/ShowList/ShowList';

import * as actionCreators from '../../store/actions';
import { connect } from 'react-redux';

class HomePage extends React.Component {
  state = {
    searchResults: [],
  }

  componentDidMount() {
    Spotify.search('podcast', '/explore')
    .then(genericResults => {
      this.setState({ searchResults: genericResults });
    });
  }

  render() {
    return (
      <div className={Classes.HomePage} data-test="component-homepage">
        <div>Explore</div>
        <ShowList 
          data-test="showlist"
          shows={this.state.searchResults}
          route="/explore"
          onClick={this.props.onShowClick} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onShowClick: (searchTerm, route) => dispatch(actionCreators.loadEpisodes(searchTerm, route)),
  }
}

export default connect(null, mapDispatchToProps)(HomePage);
