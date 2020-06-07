import React from 'react';
import Switch from 'react-switch';
import classNames from 'classnames';
import * as ReactBootstrap from 'react-bootstrap';
import './styles.css';

import CatalystLogo from './images/logoNoTextNoBack.png';

export default class MembersComponent extends React.Component {
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
          This will be the members page
        </div>
      </div>
    );
  }
}