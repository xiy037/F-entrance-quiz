import React, { Component } from 'react';
import HomePage from './pages/homePage';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <HomePage />
      </div>
    );
  }
}

export default App;
