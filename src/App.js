import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NameCard from './component/NameCard';
import LikesButton from './component/LikesButton';
import DigitalClock from './component/DigitalClock';

const tags = ['javascript开发者', 'vue开发者', 'react开发者']

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <NameCard name="孤岛拾荒" number="1234567890" isMan tags={tags} />
          <LikesButton />
        </header>
        <DigitalClock />
      </div>
    );
  }
}

export default App;
