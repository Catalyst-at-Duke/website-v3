import React from "react";
import Typist from "react-typist";
import TypistLoop from "react-typist-loop";
import Nvidia from "../images/nvidia.svg";
import Deloitte from "../images/deloitte.svg";
import Facebook from "../images/facebook.svg";
import Microsoft from "../images/microsoft.svg";
import Airbnb from "../images/airbnb.svg";
import IBM from "../images/ibm.svg";
import BCG from "../images/bcg.svg";
import Google from "../images/google.svg";
import Apple from "../images/apple.svg";
import Dropbox from "../images/dropbox.svg";
import IMC from "../images/imc.svg";
import Uber from "../images/uber.svg";
import Amazon from "../images/amazon.svg";
import Slack from "../images/slack.svg";
import NASA from "../images/nasa.svg";
import { colors } from "styles/theme.js";
import "styles/styles.css";

export default class WhereComponent extends React.Component {
  render() {
    return (
      <div
        className="page"
        style={{
          backgroundColor: colors.blueGrey,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        <div className="title" style={{ marginBottom: "20px" }}>
          <TypistLoop interval={100}>
            {["where we've gone", ""].map((text) => (
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
            marginTop: "150px",
            width: "100%",
            display: "flex",
            justifyContent: "space-evenly",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-evenly",
              flexDirection: "row",
            }}
          >
            <img className="img-work" src={Nvidia} alt="Nvidia" />
            <img className="img-work" src={Deloitte} alt="Deloitte" />
            <img className="img-work" src={Facebook} alt="Facebook" />
            <img className="img-work" src={Microsoft} alt="Microsoft" />
            <img className="img-work" src={Airbnb} alt="Airbnb" />
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-evenly",
              flexDirection: "row",
            }}
          >
            <img className="img-work" src={IBM} alt="IBM" />
            <img className="img-work" src={BCG} alt="BCG" />
            <img className="img-work" src={Google} alt="Google" />
            <img className="img-work" src={Apple} alt="Apple" />
            <img className="img-work" src={Dropbox} alt="Dropbox" />
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-evenly",
              flexDirection: "row",
            }}
          >
            <img className="img-work" src={IMC} alt="IMC" />
            <img className="img-work" src={Uber} alt="Uber" />
            <img className="img-work" src={Amazon} alt="Amazon" />
            <img className="img-work" src={Slack} alt="Slack" />
            <img className="img-work" src={NASA} alt="NASA" />
          </div>
        </div>
      </div>
    );
  }
}
