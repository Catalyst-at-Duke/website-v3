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
      executiveLeadership: null,
      executiveChairs: null,
    };
  }

  componentDidMount() {
    if (!DEBUG_MODE) {
      let executiveLeadership = [];
      let executiveChairs = [];
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
        membersArr.forEach((member) => {
          if (member.Order <= 2) {
            executiveLeadership.push(member);
          } else {
            executiveChairs.push(member);
          }
        });
        this.setState({
          members: membersArr,
          executiveLeadership: executiveLeadership,
          executiveChairs: executiveChairs,
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
  render() {
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
          {this.state.executiveLeadership && (
            <div
              style={{
                marginLeft: "4vh",
                marginRight: "4vh",
                color: colors.white,
                fontSize: fonts.size.normal,
                fontWeight: fonts.weights.bold,
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              Leadership
              <div
                style={{
                  borderTop: "2px solid white",
                }}
              ></div>
            </div>
          )}
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
          {this.state.executiveLeadership &&
            this.state.executiveLeadership.map((person) => {
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
        {this.state.executiveChairs && (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              flexWrap: "wrap",
              marginTop: "8vh",
            }}
          >
            <div
              style={{
                marginLeft: "4vh",
                marginRight: "4vh",
                color: colors.white,
                fontSize: fonts.size.normal,
                fontWeight: fonts.weights.bold,
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              Chairs
              <div
                style={{
                  borderTop: "2px solid white",
                }}
              ></div>
            </div>
          </div>
        )}
        <div
          className="content-members"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {this.state.executiveChairs &&
            this.state.executiveChairs.map((person) => {
              return (
                <LazyLoad>
                  <PolaroidFrame
                    name={person.Name}
                    key={person.Name}
                    position={person.Position}
                    photo={person.Photo ? person.Photo[0].url : ""}
                    message={person.Message}
                  />
                </LazyLoad>
              );
            })}
        </div>
      </div>
    );
  }
}
