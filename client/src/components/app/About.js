import React from "react";
import "../../styles/styles.css";
import { colors } from "../../styles/theme.js";
import Typist from "react-typist";
import TypistLoop from "react-typist-loop";
import { PhoneFrame } from "../frames";

export default class AboutComponent extends React.Component {
  render() {
    return (
      <div className="page" style={{ backgroundColor: colors.green }}>
        <div class="title">
          <TypistLoop interval={100}>
            {["about us", ""].map((text) => (
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
          class="content"
          style={{
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "50%",
              justifyContent: "flex-end",
              marginRight: "100px",
            }}
          >
            <PhoneFrame></PhoneFrame>
          </div>
          <div style={{ display: "flex", width: "50%", marginLeft: "100px" }}>
            <div
              class="about-content"
              style={{ backgroundColor: colors.white }}
            >
              {" "}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
