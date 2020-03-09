import React from 'react';
import Classes from './App.module.css';
import { Switch, Route } from 'react-router-dom';

import LoginPage from '../LoginPage/LoginPage';
import ProfilePage from '../ProfilePage/ProfilePage';
import HomePage from '../HomePage/HomePage';
import PodcastPage from '../PodcastPage/PodcastPage';

class App extends React.Component {
  render() {
    return (
      <div className={Classes.App} data-test="component-app">
        <Switch>
          <Route path="/" exact component={ProfilePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/explore" component={HomePage} />
          <Route path="/shows/:name" component={PodcastPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
