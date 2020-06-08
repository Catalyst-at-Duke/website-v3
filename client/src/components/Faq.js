import React from "react";
import classNames from "classnames";
import "../styles.css";
import { colors, fonts } from "../theme.js";

export default class FaqComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="page" style={{ background: this.props.color }}>
        <div className="home-body">This will be the FAQ page</div>
      </div>
    );
  }
}
