import React from 'react';
import Switch from 'react-switch';
import classNames from 'classnames';
import * as ReactBootstrap from 'react-bootstrap';
import './styles.css';

import CatalystLogo from './images/logoNoTextNoBack.png';

export default class HomeComponent extends React.Component {
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
    const headerClass = classNames('app', themeClass);

    return (
      <div className={headerClass}>
        <div className='home-body'>
          <div className='catalyst-logo-text'>
            <img src={CatalystLogo} alt={'logo'}/>
            <div className='catalyst-text'>
              <TextGlitch word='C A T A L Y S T'>
              </TextGlitch>
            </div>
          </div>
          <div>
            <ToggleSwitch
              checked={this.state.checked}
              handleChange={this.handleChange} 
            />
          </div>
        </div>
      </div>
    );
  }
}

class ToggleSwitch extends React.Component {
  render() {
    return (
      <div className='example'>
        <Switch 
          onChange={this.props.handleChange}
          checked={!this.props.checked}
          onColor='#83dae8'
          onHandleColor='#08b5d1'
          uncheckedIcon={false}
          checkedIcon={false}
          className='react-switch'
        />
      </div>
    );
  }
}

class TextGlitch extends React.Component {
  render() {
    const letters = this.props.word.split('');

    return (
      <div className='glitch-wrapper' role='p'>
        {
          letters.map(l => (
            l === ' '
              ? <span className='glitch-letter'>&nbsp;</span>
              : (
                <div className='glitch-wrapper'>
                  <span className='glitch-letter' data-text={l}>{ l }</span>
                </div>
              )
          ))
        }
      </div>
    );
  }
}
