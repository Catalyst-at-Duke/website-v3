import React from "react";
import Typist from "react-typist";
import TypistLoop from "react-typist-loop";

import { colors, fonts } from "styles/theme.js";
import "styles/styles.css";

import Options from "../images/finder_options.svg";
import Red from "../images/finder_red.svg";
import Yellow from "../images/finder_yellow.svg";
import Green from "../images/finder_green.svg";
import Home from "../images/rush_home.svg";
import Catalyst from "../images/logoNoTextNoBack.png";
import Folder from "../images/folder.png";

export default class RecruitmentComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
    };
  }

  closeFinder() {
    this.setState({ open: false });
  }

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
          {this.state.open && (
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
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      width: "24vh",
                      height: "8vh",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: "0.5vh",
                    }}
                  >
                    <div onClick={() => this.closeFinder()}>
                      <img
                        src={Red}
                        alt="Close"
                        style={{
                          marginLeft: "0.8vh",
                          marginRight: "0.8vh",
                          width: "4vh",
                        }}
                      />
                    </div>
                    <img
                      src={Yellow}
                      alt="Minimize"
                      style={{
                        marginLeft: "0.8vh",
                        marginRight: "0.8vh",
                        width: "4vh",
                      }}
                    />
                    <img
                      src={Green}
                      alt="Maximize"
                      style={{
                        marginLeft: "0.8vh",
                        marginRight: "0.8vh",
                        width: "4vh",
                      }}
                    />
                  </div>
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
                    <img src={Home} alt="Home" style={{ height: "4vh" }} />
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
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      width: "96vh",
                      height: "56vh",
                      fontWeight: fonts.weights.regular,
                      fontSize: fonts.size.regular,
                      color: colors.black,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "3vh",
                      }}
                    >
                      <img
                        src={Folder}
                        alt="Folder"
                        style={{
                          height: "8vh",
                          width: "10vh",
                          textShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                        }}
                      />
                      <div
                        style={{
                          fontSize: "0.4em",
                          marginTop: "1vh",
                          fontWeight: 600,
                        }}
                      >
                        ComingSoon
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
