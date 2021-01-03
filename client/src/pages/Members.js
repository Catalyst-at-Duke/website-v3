import React from "react";
import Typist from "react-typist";
import TypistLoop from "react-typist-loop";
import { PolaroidFrame } from "components/frames";
import { FirebaseContext } from "components/firebase";

import { colors } from "styles/theme.js";
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
    };
  }

  componentDidMount() {
    if (!DEBUG_MODE) {
      const db = this.props.firebase.db;
      const execRef = db.ref("members");
      execRef.on("value", (snapshot) => {
        let membersArr = snapshot.val();
        membersArr.sort((a, b) => {
          return a.year - b.year;
        });
        this.setState({ members: membersArr });
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
  render() {
    return (
      <div
        className="content-members"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginTop: "15vh",
          flexWrap: "wrap",
        }}
      >
        {this.state.members &&
          this.state.members.map((person) => {
            return (
              <PolaroidFrame
                name={person.name}
                key={person.name}
                position={`Class of ${person.year}`}
                photo={person.photo}
                message={person.bio}
              />
            );
          })}
      </div>
    );
  }
}
