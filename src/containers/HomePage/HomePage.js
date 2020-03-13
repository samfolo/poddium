import React from 'react';
import Classes from './HomePage.module.css';
import Spotify from '../../util/Spotify/Spotify';
import ShowList from '../../components/ShowList/ShowList';

import * as actionCreators from '../../store/actions';
import { connect } from 'react-redux';
import NavBar from '../../components/NavBar/NavBar';
import PageHeading from '../../components/UI/PageHeading/PageHeading';
import { Redirect } from 'react-router';

export class HomePage extends React.Component {
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
        {this.props.selectedShow ? <Redirect to={`/shows/${this.props.selectedShow.name}`} /> : null}
        <PageHeading>Explore</PageHeading>
        <ShowList 
          data-test="showlist"
          shows={this.state.searchResults}
          route="/explore"
          onClick={this.props.onShowClick} />
        <NavBar data-test="navbar" />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedShow: state.podcast.showLoaded,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onShowClick: (searchTerm, route) => dispatch(actionCreators.loadEpisodes(searchTerm, route)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
