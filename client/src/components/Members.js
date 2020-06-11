import React from "react";
import "../styles/styles.css";
import { colors } from "../styles/theme.js";
import Typist from "react-typist";
import TypistLoop from "react-typist-loop";
import PolaroidFrame from "./cards/PolaroidFrame";
import { FirebaseContext } from "./Firebase";

const DEBUG = true;

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
              {["executive team", ""].map((text) => (
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
    if (!DEBUG) {
      const db = this.props.firebase.db;
      const execRef = db.ref("exec");
      execRef.on("value", (snapshot) => {
        let membersArr = snapshot.val();
        membersArr.sort((a, b) => {
          if (a.Order < b.Order) {
            return -1;
          } else if (a.Order > b.Order) {
            return 1;
          } else {
            return 0;
          }
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
        className="content"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginTop: "10%",
          flexWrap: "wrap",
        }}
      >
        {this.state.members &&
          this.state.members.map((person) => {
            return (
              <PolaroidFrame
                name={person.Name}
                key={person.Name}
                position={person.Position}
                photo={person.Photo ? person.Photo[0].url : ""}
                message={person.Message}
              />
            );
          })}
      </div>
    );
  }
}
