import React, { Component } from 'react';
import { Link } from 'react-router';
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
        <h1>Hello World</h1>
        <p className="App-intro">
          An app Demonstrating an implamentation of node.
        </p>
        <Link to="/">Home</Link>
        <span id='changeling'></span>
        <Link to="/About">About </Link>
      </div>
    )
  }
};

export default App;
