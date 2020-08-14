import React from "react";
import Typist from "react-typist";
import TypistLoop from "react-typist-loop";

import { colors } from "styles/theme.js";
import "styles/styles.css";

export default class RecruitmentComponent extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="body" style={{ backgroundColor: colors.pink }}>
          <div class="title">
            <TypistLoop interval={100}>
              {["recruitment", ""].map((text) => (
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
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              height: "100%",
            }}
          >
            {" "}
            recruitment goes here
          </div>
        </div>
      </div>
    );
  }
}
