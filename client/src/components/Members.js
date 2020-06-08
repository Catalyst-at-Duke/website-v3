import React from "react";
import classNames from "classnames";
import "../styles.css";
import { colors, fonts } from "../theme.js";

export default class MembersComponent extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="home-body" style={{ backgroundColor: colors.purple }}>
          This will be the members page
        </div>
      </div>
    );
  }
}
