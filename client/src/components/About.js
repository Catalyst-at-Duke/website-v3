import React from "react";
import "../styles/styles.css";
import { colors, fonts } from "../styles/theme.js";
import Typist from "react-typist";
import TypistLoop from "react-typist-loop";

export default class AboutComponent extends React.Component {
  render() {
    return (
      <div className="page" style={{ backgroundColor: colors.green }}>
        <div class="title">
          <TypistLoop interval={100}>
            {["about", ""].map((text) => (
              <Typist
                repeat
                avgTypingDelay={100}
                key={text}
                stdTypingDelay={30}
                cursor={{ show: true, blink: true }}
              >
                <span>{text}</span>
                <Typist.Backspace count={text.length} delay={2000} />
              </Typist>
            ))}
          </TypistLoop>
        </div>
        <div class="content">About stuff</div>
      </div>
    );
  }
}
