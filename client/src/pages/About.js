import React from "react";
import Typist from "react-typist";
import TypistLoop from "react-typist-loop";
import { PhoneFrame } from "components/frames";

import { colors } from "styles/theme.js";
import "styles/styles.css";
import Toggle from "../images/toggle.svg";

export default class AboutComponent extends React.Component {
  state = {
    message:
      "Catalyst is a social and pre-professional community of tech enthusiasts. We strive to connect our members to peers with similar interests and provide members with mentorship in the field of technology. As a diverse, tight-knit group on campus, we can rely on each other for not only career and academic advice, but also for social and emotional support. We wish to help members realize their potential and explore the possibilities that await in the tech world.",
    title: "def mission():",
  };
  callbackFunction = (childData) => {
    this.setState({ message: childData });
  };

  titleFunction = (childData) => {
    this.setState({ title: childData });
  };
  render() {
    return (
      <div className="page" style={{ backgroundColor: colors.green }}>
        <div className="title">
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
          className="content"
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
            <PhoneFrame
              parentCallback={this.callbackFunction}
              titleMessage={this.titleFunction}
            ></PhoneFrame>
          </div>
          <div
            style={{
              display: "flex",
              width: "60%",
              marginLeft: "50px",
            }}
          >
            <div
              className="about-content"
              style={{
                backgroundColor: colors.white,
                height: "420px",
                borderRadius: "20px",
              }}
            >
              <b>
                <p
                  style={{
                    color: "#26272C",
                    fontSize: "40px",
                    marginLeft: "30px",
                    marginTop: "20px",
                  }}
                >
                  {this.state.title}
                </p>
                <p
                  style={{
                    color: "#696969",
                    marginTop: "0px",
                    marginBottom: "30px",
                    marginLeft: "60px",
                    marginRight: "30px",
                    fontFamily: "Lato",
                  }}
                  className="pillars"
                >
                  {this.state.message}{" "}
                </p>
              </b>
            </div>
          </div>
        </div>
        <div className="arrow-down" style={{ opacity: "80%" }}></div>
      </div>
    );
  }
}
