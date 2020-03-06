import React from 'react';
import Classes from './HomePage.module.css';
import Spotify from '../../util/Spotify/Spotify';

class HomePage extends React.Component {
  state = {
    searchResults: [],
  }

  componentDidMount() {
    Spotify.search('the art of diffrnce')
  }

  render() {
    return (
      <div className={Classes.HomePage} data-test="component-homepage" />
    );
  }
}

export default HomePage;
