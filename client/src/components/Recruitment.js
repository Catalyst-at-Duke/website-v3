import React from "react";
import classNames from "classnames";
import "../styles.css";
import { colors, fonts } from "../theme.js";
export default class MembersComponent extends React.Component {
  render() {
    return (
      <div className="app page" style={{ background: this.props.color }}>
        <div className="home-body">This will be the recruitment page</div>
      </div>
    );
  }
}
