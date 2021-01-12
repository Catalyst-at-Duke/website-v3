import React from "react";
import Typist from "react-typist";
import TypistLoop from "react-typist-loop";

import { colors, fonts } from "styles/theme.js";
import "styles/styles.css";

import Options from "../images/finder_options.svg";
import Home from "../images/rush_home.svg";

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
              color: colors.white,
              fontSize: fonts.size.normal,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "120vh",
                height: "64vh",
                backgroundColor: colors.white,
                borderRadius: "10px",
                marginTop: "50px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "24vh",
                  height: "100%",
                  backgroundColor: "#EBEBEB",
                  borderRadius: "10px 0px 0px 10px",
                }}
              >
                <img src={Options} style={{ marginTop: "2vh" }} />
                <div
                  style={{
                    color: "#A0A0A0",
                    fontWeight: fonts.weights.bold,
                    marginTop: "4vh",
                    alignSelf: "flex-start",
                    marginLeft: "4vh",
                  }}
                >
                  Favorites
                </div>
                <div
                  style={{
                    marginTop: "1vh",
                    width: "22vh",
                    marginLeft: "1vh",
                    backgroundColor: "#CBCAC9",
                    borderRadius: "5px",
                  }}
                >
                  <img src={Home} style={{ height: "4vh" }} />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "96vh",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    height: "8vh",
                    width: "96vh",
                    backgroundColor: "#D8D8D8",
                    borderRadius: "0px 10px 0px 0px",
                  }}
                >
                  <div
                    style={{
                      color: colors.black,
                      fontWeight: fonts.weights.regular,
                      fontSize: fonts.size.regular,
                      marginLeft: "6vh",
                    }}
                  >
                    rush_s21
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
