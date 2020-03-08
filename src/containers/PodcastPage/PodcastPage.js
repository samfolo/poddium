import React from 'react';
import Classes from './PodcastPage.module.css';

class PodcastPage extends React.Component {
  render() {
    return (
      <div className={Classes.PodcastPage} data-test="component-podcast-page">
        <div data-test="episode-list" />
      </div>
    );
  }
}

export default PodcastPage;
