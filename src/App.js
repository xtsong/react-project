import React, { Component } from 'react';
import logo from './logo.svg';
import ThemeContext from './theme-context'
import ThemeBar from './component/ThemeBar'
import './App.css';

const themes = {
  light: {
    classnames: 'btn btn-primary',
    bgColor: '#eeeeee',
    color: '#000'
  },
  dark: {
    classnames: 'btn btn-light',
    bgColor: '#222222',
    color: '#fff'
  },
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'light'
    }
    this.changeTheme = this.changeTheme.bind(this)
  }

  changeTheme(theme) {
    this.setState({
      theme,
    })
  }

  render() {
    return (
      <ThemeContext.Provider value={themes[this.state.theme]}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Welcome to React</h1>
            <a
              href="#theme-switcher" 
              className="btn btn-light"
              onClick={() => {this.changeTheme('light')}}
            >
              浅色主题
            </a>
            <a 
              href="#theme-switcher" 
              className="btn btn-secondary"
              onClick={() => {this.changeTheme('dark')}}
            >
              深色主题
            </a>
          </header>
          <ThemeBar />
        </div>
      </ThemeContext.Provider>
    );
  }
}

export default App;
