import React from "react";
import classNames from "classnames";
import "../styles/styles.css";
import { colors, fonts } from "../styles/theme.js";
export default class MembersComponent extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="body" style={{ backgroundColor: colors.pink }}>
          This will be the recruitment page
        </div>
      </div>
    );
  }
}
