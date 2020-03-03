import React from 'react';
import Classes from './App.module.css';
import LoginPage from '../LoginPage/LoginPage';

class App extends React.Component {
  render() {
    return (
      <div className={Classes.App} data-test="component-app">
        <LoginPage data-test="login-page" />
      </div>
    );
  }
}

export default App;
