import React from 'react';
import Classes from './HomePage.module.css';
import Spotify from '../../util/Spotify/Spotify';
import ShowList from '../../components/ShowList/ShowList';

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
        <ShowList data-test="showlist" shows={this.state.searchResults} />
      </div>
    );
  }
}

export default HomePage;
