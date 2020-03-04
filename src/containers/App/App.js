import React from 'react';
import Classes from './App.module.css';
import LoginPage from '../LoginPage/LoginPage';
import { Switch, Route } from 'react-router-dom';
import ProfilePage from '../ProfilePage/ProfilePage';

class App extends React.Component {
  render() {
    return (
      <div className={Classes.App} data-test="component-app">
        <Switch>
          <Route path="/" exact component={ProfilePage} />
          <Route path="/login" component={LoginPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
