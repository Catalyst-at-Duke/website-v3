import React from "react";
import "../styles/styles.css";
import { colors } from "../styles/theme.js";
import Typist from "react-typist";
import TypistLoop from "react-typist-loop";
import PolaroidFrame from "./cards/PolaroidFrame";
import { FirebaseContext } from "./Firebase";

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
    const db = this.props.firebase.db;
    const execRef = db.ref("exec");
    execRef.on("value", (snapshot) => {
      this.setState({ members: snapshot.val() });
      console.log(this.state.members);
    });
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
              />
            );
          })}
      </div>
    );
  }
}
