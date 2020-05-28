import React, {Component} from "react";
import Switch from "react-switch";
import classNames from "classnames";
import logo from './logo.svg';
import './App.css';
import './styles.css';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      checked: true, // y dark, n light
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = () => {
    this.setState(state => ({
      checked: !this.state.checked
    }));
  }

  render() {
    const themeClass = this.state.checked ? 'dark-theme' : 'light-theme';
    const headerClass = classNames('App-header', themeClass);

    return (
      <div className="App">
        <header className={headerClass}>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>Testing</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <div>
            <ToggleSwitch
              checked={this.state.checked}
              handleChange={this.handleChange} 
            />
          </div>
        </header>
      </div>
    );
  }
}

class ToggleSwitch extends React.Component {
  render() {
    return (
      <div className="example">
        <Switch 
          onChange={this.props.handleChange}
          checked={!this.props.checked}
          onColor="#86d3ff"
          onHandleColor="#2693e6"
          uncheckedIcon={false}
          checkedIcon={false}
          className="react-switch"
        />
      </div>
    );
  }
}
