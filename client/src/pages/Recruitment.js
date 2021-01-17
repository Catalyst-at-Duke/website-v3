import React from "react";
import Typist from "react-typist";
import TypistLoop from "react-typist-loop";

import { SideBar } from "components/sidebar";
import { colors, fonts } from "styles/theme.js";
import "styles/styles.css";

// import Options from "../images/finder_options.svg";
import Red from "../images/finder_red.svg";
import Yellow from "../images/finder_yellow.svg";
import Green from "../images/finder_green.svg";
import Home from "../images/rush_home.svg";
// import Catalyst from "../images/logoNoTextNoBack.png";
import Folder from "../images/folder.png";

const HOME = "";
const SCHEDULE = "schedule";

export default class RecruitmentComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      currPage: HOME,
    };
  }

  closeFinder = () => {
    this.setState({ open: false });
  };

  setPage = (pageName) => {
    this.setState({ currPage: pageName });
  };

  getPage = () => {
    if (this.state.currPage == HOME) {
      return <HomePage setPage={this.setPage} />;
    } else if (this.state.currPage == SCHEDULE) {
      return <SchedulePage setPage={this.setPage} />;
    }
  };

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
                    width: "20vh",
                    height: "100%",
                    backgroundColor: "#EBEBEB",
                    borderRadius: "10px 0px 0px 10px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      width: "20vh",
                      height: "8vh",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div onClick={() => this.closeFinder()}>
                      <img
                        src={Red}
                        alt="Close"
                        style={{
                          marginLeft: "6px",
                          marginRight: "6px",
                          width: "25px",
                        }}
                      />
                    </div>
                    <img
                      src={Yellow}
                      alt="Minimize"
                      style={{
                        marginLeft: "6px",
                        marginRight: "6px",
                        width: "25px",
                      }}
                    />
                    <img
                      src={Green}
                      alt="Maximize"
                      style={{
                        marginLeft: "6px",
                        marginRight: "6px",
                        width: "25px",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      color: "#A0A0A0",
                      fontWeight: fonts.weights.bold,
                      marginTop: "2vh",
                      alignSelf: "flex-start",
                      marginLeft: "2vh",
                    }}
                  >
                    Favorites
                  </div>
                  <div
                    onClick={() => this.setState({ currPage: "" })}
                    style={{
                      marginTop: "1vh",
                      width: "18vh",
                      marginLeft: "1vh",
                      backgroundColor: "#CBCAC9",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                  >
                    <img src={Home} alt="Home" style={{ height: "4vh" }} />
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
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
                      width: "100vh",
                      backgroundColor: "#D8D8D8",
                      borderRadius: "0px 10px 0px 0px",
                    }}
                  >
                    <div
                      style={{
                        color: colors.black,
                        fontWeight: 600,
                        fontSize: fonts.size.regular,
                        marginLeft: "4vh",
                      }}
                    >
                      rush_s21 / {this.state.currPage}
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      width: "100%",
                      height: "56vh",
                      fontWeight: fonts.weights.regular,
                      fontSize: fonts.size.regular,
                      color: colors.black,
                    }}
                  >
                    {this.getPage()}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <SideBar />
      </div>
    );
  }
}

const HomePage = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
      }}
    >
      <div
        onClick={() => {
          window.open("https://tinyurl.com/cata-notion");
        }}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin: "3vh",
          cursor: "pointer",
        }}
      >
        <img
          src={Folder}
          alt="Folder"
          style={{
            width: "16vh",
            textShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
          }}
        />
        <div
          style={{
            fontSize: "0.8em",
            marginTop: "1vh",
            fontWeight: 300,
          }}
        >
          Notion.link
        </div>
      </div>
      <div
        onClick={() => {
          props.setPage(SCHEDULE);
        }}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin: "3vh",
          cursor: "pointer",
        }}
      >
        <img
          src={Folder}
          alt="Folder"
          style={{
            width: "16vh",
            textShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
          }}
        />
        <div
          style={{
            fontSize: "0.8em",
            marginTop: "1vh",
            fontWeight: 300,
          }}
        >
          Schedule
        </div>
      </div>
    </div>
  );
};
const SchedulePage = (props) => {
  return (
    <iframe
      src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23B39DDB&amp;ctz=America%2FNew_York&amp;src=Y3NwajNzM3ZkMDY3dm4wdW43Z2lnZ2I0cmNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23009688&amp;mode=MONTH"
      style={{ border: "solid 1px #777" }}
      width="100%"
      height="100%"
      frameBorder="0"
      scrolling="no"
    ></iframe>
  );
};
