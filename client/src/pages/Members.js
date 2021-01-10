import React from "react";
import Typist from "react-typist";
import TypistLoop from "react-typist-loop";
import { PolaroidFrame } from "components/frames";
import { FirebaseContext } from "components/firebase";
import LazyLoad from "react-lazyload";

import { colors, fonts } from "styles/theme.js";
import "styles/styles.css";

const DEBUG_MODE = false;

export default class MembersComponent extends React.Component {
  render() {
    return (
      <div className="app">
        <div
          className="body-members"
          style={{
            backgroundColor: colors.purple,
          }}
        >
          <div className="title">
            <TypistLoop interval={100}>
              {["members", ""].map((text) => (
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
          {
            <FirebaseContext.Consumer>
              {(firebase) => {
                return <ExecComponent firebase={firebase} />;
              }}
            </FirebaseContext.Consumer>
          }
        </div>
      </div>
    );
  }
}

class ExecComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      members: null,
      seniorMembers: null,
      juniorMembers: null,
      sophomoreMembers: null,
      freshmenMembers: null,
      currentClass: 4,
    };
  }

  componentDidMount() {
    if (!DEBUG_MODE) {
      const db = this.props.firebase.db;
      const execRef = db.ref("members");
      let seniorMembers = [];
      let juniorMembers = [];
      let sophomoreMembers = [];
      let freshmenMembers = [];
      execRef.on("value", (snapshot) => {
        let membersArr = snapshot.val();
        membersArr.sort((a, b) => {
          return a.year - b.year;
        });
        membersArr.forEach((member) => {
          if (member.year === "2021") {
            seniorMembers.push(member);
          } else if (member.year === "2022") {
            juniorMembers.push(member);
          } else if (member.year === "2023") {
            sophomoreMembers.push(member);
          } else if (member.year === "2024") {
            freshmenMembers.push(member);
          }
        });
        this.setState({
          members: seniorMembers,
          seniorMembers: seniorMembers,
          juniorMembers: juniorMembers,
          sophomoreMembers: sophomoreMembers,
          freshmenMembers: freshmenMembers,
        });
        console.log(this.state.members);
      });
    } else {
      this.setState({
        members: [
          {
            Name: "Test User",
            Position: "President",
            Message: "hi hi hi hi hi",
          },
          {
            Name: "Test User 2",
            Position: "President",
            Message: "The mission of the president is to blank",
          },
        ],
      });
    }
  }

  selectClass(c) {
    this.setState({ currentClass: c });
    if (c === 4) {
      this.setState({ members: this.state.seniorMembers });
    } else if (c === 3) {
      this.setState({ members: this.state.juniorMembers });
    } else if (c === 2) {
      this.setState({ members: this.state.sophomoreMembers });
    } else {
      this.setState({ members: this.state.freshmenMembers });
    }
  }

  render() {
    let seniorDivClass;
    let juniorDivClass;
    let sophomoreDivClass;
    let freshmenDivClass;

    let seniorUnderline;
    let juniorUnderline;
    let sophomoreUnderline;
    let freshmenUnderline;
    let underline = (
      <div
        style={{
          borderTop: "2px solid white",
        }}
      ></div>
    );

    if (this.state.currentClass === 4) {
      seniorUnderline = underline;
      seniorDivClass = "members-selected";
      juniorUnderline = sophomoreUnderline = freshmenUnderline = null;
      juniorDivClass = sophomoreDivClass = freshmenDivClass =
        "members-unselected";
    } else if (this.state.currentClass === 3) {
      juniorUnderline = underline;
      juniorDivClass = "members-selected";
      seniorUnderline = sophomoreUnderline = freshmenUnderline = null;
      seniorDivClass = sophomoreDivClass = freshmenDivClass =
        "members-unselected";
    } else if (this.state.currentClass === 2) {
      sophomoreUnderline = underline;
      sophomoreDivClass = "members-selected";
      seniorUnderline = juniorUnderline = freshmenUnderline = null;
      seniorDivClass = juniorDivClass = freshmenDivClass = "members-unselected";
    } else if (this.state.currentClass === 1) {
      freshmenUnderline = underline;
      freshmenDivClass = "members-selected";
      seniorUnderline = juniorUnderline = sophomoreUnderline = null;
      seniorDivClass = juniorDivClass = sophomoreDivClass =
        "members-unselected";
    }

    return (
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: "20vh",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              marginLeft: "4vh",
              marginRight: "4vh",
              color: colors.white,
              fontSize: fonts.size.normal,
              flexDirection: "column",
              justifyContent: "center",
              cursor: "pointer",
            }}
            class={seniorDivClass}
            onClick={() => this.selectClass(4)}
          >
            Class of 2021
            {seniorUnderline}
          </div>
          <div
            style={{
              marginLeft: "4vh",
              marginRight: "4vh",
              color: colors.white,
              fontSize: fonts.size.normal,
              flexDirection: "column",
              justifyContent: "center",
              cursor: "pointer",
            }}
            class={juniorDivClass}
            onClick={() => this.selectClass(3)}
          >
            Class of 2022
            {juniorUnderline}
          </div>
          <div
            style={{
              marginLeft: "4vh",
              marginRight: "4vh",
              color: colors.white,
              fontSize: fonts.size.normal,
              flexDirection: "column",
              justifyContent: "center",
              cursor: "pointer",
            }}
            class={sophomoreDivClass}
            onClick={() => this.selectClass(2)}
          >
            Class of 2023
            {sophomoreUnderline}
          </div>
        </div>
        <div
          className="content-members"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {this.state.members &&
            this.state.members.map((person) => {
              return (
                <LazyLoad>
                  <PolaroidFrame
                    name={person.name}
                    key={person.name}
                    position={`Class of ${person.year}`}
                    photo={person.photo}
                    message={person.bio}
                  />
                </LazyLoad>
              );
            })}
        </div>
      </div>
    );
  }
}
