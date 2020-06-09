import React from "react";
import classNames from "classnames";
import "../styles/styles.css";
import { colors, fonts } from "../styles/theme.js";
import Typist from "react-typist";
import TypistLoop from "react-typist-loop";

export default class FaqComponent extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="body" style={{ backgroundColor: colors.lightblue }}>
          <div class="title">
            <TypistLoop interval={100}>
              {["frequently asked questions", ""].map((text) => (
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
            faq q's
          </div>
        </div>
      </div>
    );
  }
}
