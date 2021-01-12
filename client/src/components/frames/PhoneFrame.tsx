import React, { useState } from "react";
import { colors } from "../../styles/theme.js";
import "./style.css";
import CataTech from "../../images/tech_types.png";
import Mission from "../../images/home.png";
import Support from "../../images/support.png";
import Dev from "../../images/dev.png";
import Companies from "../../images/companies.png";
import Diversity from "../../images/diversity.png";
import Social from "../../images/social.png";
import Mentorship from "../../images/mentor.png";
import Toggle from "../../images/toggle.svg";

const PhoneFrame = (props: any) => {
  const sendData = (e: any) => {
    props.parentCallback(e);
  };

  const sendTitle = (e: any) => {
    props.titleMessage(e);
  };

  const [isPhoneOn, setIsPhoneOn] = useState(true);
  const [appNum, setAppNum] = useState(0);

  const togglePhone = () => {
    setIsPhoneOn(!isPhoneOn);
  };

  const toggleMission = () => {
    setAppNum(0);
    sendData(
      "Catalyst is Duke’s premier social and pre-professional tech organization established in 2016. As a bunch of tech enthusiasts, we are a tight-knit group whose members are there for each other whether it’s career advice or emotional support. We are founded on four pillars: mentorship, community, innovation, and outreach. Our mission is to help members realize their potential and grow their talents as we all explore the technological possibilities that await in the world."
    );

    sendTitle("def mission():");
  };

  const toggleSupport = () => {
    setAppNum(1);
    sendData(
      "As a diverse, tight-knit group on campus, we can rely on each other for not only career and academic advice, but also for social and emotional support."
    );
    sendTitle("def support():");
  };

  const toggleDev = () => {
    setAppNum(2);
    sendData(
      "Our members are experienced in almost all facets of the computer science industry, from backend software development to financial technology and healthcare technology. If you want to build something, there’s a strong probability that someone in Catalyst has experience in it and is willing to take that journey with you."
    );
    sendTitle("def dev():");
  };

  const toggleCompanies = () => {
    setAppNum(3);
    sendTitle("def companies():");
  };

  const toggleDiversity = () => {
    setAppNum(4);
    sendTitle("def diversity():");
  };

  const toggleSocial = () => {
    setAppNum(5);
    sendData(
      "One of Catalyst's main focus is creating a warm social environment for our members. We spend time together getting meals on campus, coming to our weekly game nights, and even meeting up while working in new cities over the summer. "
    );
    sendTitle("def social():");
  };

  const toggleMentors = () => {
    setAppNum(6);
    sendData(
      "We strive to connect our members to peers with similar interests and provide members with mentorship. Right when you join Catalyst, we pair you with an existing member. As your big, they’re your anchor to Catalyst and will help you with anything from finding the best chocolate chip cookie recipe to preparing for recruiting and interviews. Outside of your big, our community is full of people who you can always ask as well. Members are either going through the same things as you or have already been through it, and are always willing to give advice, mock interviews, and any other support you may want."
    );
    sendTitle("def mentorship():");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <div
          className={"hbutton"}
          style={{ backgroundColor: colors.gray }}
          onClick={togglePhone}
        ></div>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          className={"phone-outer"}
          style={{ backgroundColor: colors.darkGray }}
        >
          {!isPhoneOn ? (
            <div
              className={"phone-inner"}
              style={{ backgroundColor: colors.black }}
            />
          ) : (
            <div
              className={"phone-inner"}
              style={{
                background: `url(${CataTech})`,
                backgroundPosition: "center",
              }}
            >
              <div className={"app-box"}>
                {appNum != 0 ? (
                  <div
                    className={"app-icon"}
                    style={{
                      backgroundColor: "#50B3CE",
                    }}
                    onClick={toggleMission}
                  >
                    <img className={"img-box"} src={Mission} />
                    <p className={"app-name"}>Mission</p>
                  </div>
                ) : (
                  <div
                    className={"app-icon"}
                    style={{
                      backgroundColor: "#C4C4C4",
                    }}
                    onClick={toggleMission}
                  >
                    <img className={"img-toggle"} src={Toggle} />
                    <p className={"app-name"}>Mission</p>
                  </div>
                )}
                {appNum != 1 ? (
                  <div
                    className={"app-icon"}
                    style={{ backgroundColor: "#EE8380" }}
                    onClick={toggleSupport}
                  >
                    <img className={"img-box"} src={Support} />
                    <p className={"app-name"}>Support</p>
                  </div>
                ) : (
                  <div
                    className={"app-icon"}
                    style={{
                      backgroundColor: "#C4C4C4",
                    }}
                    onClick={toggleSupport}
                  >
                    <img className={"img-toggle"} src={Toggle} />
                    <p className={"app-name"}>Support</p>
                  </div>
                )}
                {appNum != 2 ? (
                  <div
                    className={"app-icon"}
                    style={{ backgroundColor: "#F6D86B" }}
                    onClick={toggleDev}
                  >
                    <img className={"img-box"} src={Dev} />
                    <p className={"app-name"}>Dev</p>
                  </div>
                ) : (
                  <div
                    className={"app-icon"}
                    style={{
                      backgroundColor: "#C4C4C4",
                    }}
                    onClick={toggleDev}
                  >
                    <img className={"img-toggle"} src={Toggle} />
                    <p className={"app-name"}>Dev</p>
                  </div>
                )}
                {appNum != 3 ? (
                  <div
                    className={"app-icon"}
                    style={{ backgroundColor: "#97D8E6" }}
                    onClick={toggleCompanies}
                  >
                    <img className={"img-box"} src={Companies} />
                    <p className={"app-name"}>Companies</p>
                  </div>
                ) : (
                  <div
                    className={"app-icon"}
                    style={{
                      backgroundColor: "#C4C4C4",
                    }}
                    onClick={toggleCompanies}
                  >
                    <img className={"img-toggle"} src={Toggle} />
                    <p className={"app-name"}>Companies</p>
                  </div>
                )}
                {appNum != 4 ? (
                  <div
                    className={"app-icon"}
                    style={{ backgroundColor: "#6974B2" }}
                    onClick={toggleDiversity}
                  >
                    <img className={"img-box"} src={Diversity} />
                    <p className={"app-name"}>Diversity</p>
                  </div>
                ) : (
                  <div
                    className={"app-icon"}
                    style={{
                      backgroundColor: "#C4C4C4",
                    }}
                    onClick={toggleDiversity}
                  >
                    <img className={"img-toggle"} src={Toggle} />
                    <p className={"app-name"}>Diversity</p>
                  </div>
                )}
                {appNum != 5 ? (
                  <div
                    className={"app-icon"}
                    style={{ backgroundColor: "#EFC2C1" }}
                    onClick={toggleSocial}
                  >
                    <img className={"img-box"} src={Social} />
                    <p className={"app-name"}>Social</p>
                  </div>
                ) : (
                  <div
                    className={"app-icon"}
                    style={{
                      backgroundColor: "#C4C4C4",
                    }}
                    onClick={toggleSocial}
                  >
                    <img className={"img-toggle"} src={Toggle} />
                    <p className={"app-name"}>Social</p>
                  </div>
                )}
                {appNum != 6 ? (
                  <div
                    className={"app-icon"}
                    style={{ backgroundColor: "#26272C" }}
                    onClick={toggleMentors}
                  >
                    <img className={"img-box"} src={Mentorship} />
                    <p className={"app-name"}>Mentorship</p>
                  </div>
                ) : (
                  <div
                    className={"app-icon"}
                    style={{
                      backgroundColor: "#C4C4C4",
                    }}
                    onClick={toggleMentors}
                  >
                    <img className={"img-toggle"} src={Toggle} />
                    <p className={"app-name"}>Mentorship</p>
                  </div>
                )}
              </div>
              <div
                className={"flex-box"}
                style={{ position: "relative", bottom: "0" }}
              >
                <div
                  className={"circle"}
                  style={{
                    backgroundColor: colors.lightGray,
                    marginTop: "50px",
                  }}
                ></div>
                <div
                  className={"circle"}
                  style={{
                    backgroundColor: colors.white,
                    marginTop: "50px",
                    marginLeft: "10px",
                  }}
                ></div>
              </div>
            </div>
          )}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            className={"vbutton"}
            style={{
              backgroundColor: colors.gray,
              marginTop: "40px",
            }}
          ></div>
          <div
            className={"vbutton"}
            style={{ backgroundColor: colors.gray, marginTop: "1px" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default PhoneFrame;
