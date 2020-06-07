import React from 'react';
import classNames from 'classnames';
import './styles.css';

export default class MembersComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      checked: true, // y dark, n light
    };
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    const themeClass = this.state.checked ? 'dark-theme' : 'light-theme';
    const headerClass = classNames('app', themeClass);

    return (
      <div className={headerClass}>
        <div className='home-body'>
          This will be the recruitment page
        </div>
      </div>
    );
  }
}
