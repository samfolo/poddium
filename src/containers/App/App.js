import React from 'react';
import Classes from './App.module.css';
import LoginPage from '../LoginPage/LoginPage';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className={Classes.App} data-test="component-app">
        <Switch>
          <Route path="/" exact render={() => { return <div data-test="component-profile-page">Elodie</div> }} />
          <Route path="/login" render={() => { return <LoginPage data-test="login-page" /> }} />
        </Switch>
      </div>
    );
  }
}

export default App;
