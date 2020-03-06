import React from 'react';
import Classes from './HomePage.module.css';
import Spotify from '../../util/Spotify/Spotify';

class HomePage extends React.Component {
  state = {
    searchResults: [],
  }

  componentDidMount() {
    Spotify.search('podcast')
    .then(genericResults => {
      this.setState({ searchResults: genericResults });
    });
  }

  renderResults = () => {
    const shows = this.state.searchResults || ['i', 'i'];
    const podcastComponents = shows.map(show => {
      return (
        <div 
        key={`${show.id}`}
        data-test="podcast" />
      );
    });
    return podcastComponents;
  }

  render() {
    return (
      <div className={Classes.HomePage} data-test="component-homepage">
        {this.renderResults()}
      </div>
    );
  }
}

export default HomePage;
