import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <h1>Hello World</h1>
          An app Demonstrating an implamentation of node.
        </p>
        <span id='changeling'></span>
      </div>
    );
  }
}

export default App;

