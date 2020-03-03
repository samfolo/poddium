import React from 'react';
import Classes from './App.module.css';

class App extends React.Component {
  render() {
    return (
      <div className={Classes.App} data-test="component-app">
      </div>
    );
  }
}

export default App;
