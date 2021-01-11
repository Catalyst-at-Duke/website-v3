import React from "react";
import Typist from "react-typist";
import TypistLoop from "react-typist-loop";
import { PolaroidFrame } from "components/frames";
import { FirebaseContext } from "components/firebase";
import LazyLoad from "react-lazyload";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import LanguageIcon from "@material-ui/icons/Language";
import IconButton from "@material-ui/core/IconButton";

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
      open: false,
      person: {
        Name: "",
        Order: 0,
        Photo: null,
        Position: "",
      },
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

  handleOpen(person) {
    this.setState({ person: person, open: true });
  }

  handleClose() {
    this.setState({ open: false });
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
                <div
                  onClick={() => this.handleOpen(person)}
                  style={{
                    margin: "30px",
                    cursor: "pointer",
                  }}
                >
                  <PolaroidFrame
                    name={person.Name}
                    key={person.Name}
                    position={person.Position}
                    photo={person.Photo ? person.Photo : ""}
                    message={person.Message}
                  />
                </div>
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
                  <div
                    onClick={() => this.handleOpen(person)}
                    style={{
                      margin: "30px",
                      cursor: "pointer",
                    }}
                  >
                    <PolaroidFrame
                      name={person.Name}
                      key={person.Name}
                      position={person.Position}
                      photo={person.Photo ? person.Photo : ""}
                      message={person.Message}
                    />
                  </div>
                </LazyLoad>
              );
            })}
        </div>
        <Modal
          open={this.state.open}
          onClose={() => this.handleClose()}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Fade in={this.state.open}>
            <div
              style={{
                backgroundColor: colors.white,
                boxShadow: "1px 2px 5px",
                borderRadius: "3px",
                display: "flex",
                flexDirection: "column",
                width: "50vh",
              }}
            >
              <div
                style={{
                  height: "7vh",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <img
                  alt={this.state.person.Name}
                  style={{
                    backgroundColor: colors.black,
                    width: "5vh",
                    height: "5vh",
                    objectFit: "cover",
                    marginLeft: "2vh",
                    borderRadius: "50%",
                  }}
                  src={this.state.person.Photo ? this.state.person.Photo : ""}
                />
                <div
                  style={{
                    fontSize: fonts.size.small,
                    fontWeight: 500,
                    color: colors.black,
                    marginLeft: "2vh",
                  }}
                >
                  {this.state.person.Name}
                </div>
              </div>
              <img
                alt={this.state.person.name}
                style={{
                  backgroundColor: colors.black,
                  width: "50vh",
                  height: "54vh",
                  objectFit: "cover",
                }}
                src={this.state.person.Photo ? this.state.person.Photo : ""}
              />
              <div
                style={{
                  height: "5vh",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <img
                  alt="Duke Catalyst"
                  style={{
                    width: "2.5vh",
                    height: "2.5vh",
                    objectFit: "cover",
                    marginLeft: "2vh",
                  }}
                  src={require("images/logoNoTextNoBack.png")}
                />
                <div
                  style={{
                    fontSize: "0.8em",
                    marginLeft: "1vh",
                  }}
                >
                  Liked by
                </div>
                <div
                  style={{
                    fontSize: "0.8em",
                    marginLeft: "0.5vh",
                    fontWeight: fonts.weights.bold,
                  }}
                >
                  dukecatalyst
                </div>
                <div
                  style={{
                    fontSize: "0.8em",
                    marginLeft: "0.5vh",
                  }}
                >
                  and
                </div>
                <div
                  style={{
                    fontSize: "0.8em",
                    marginLeft: "0.5vh",
                    fontWeight: fonts.weights.bold,
                  }}
                >
                  others
                </div>
              </div>
              {this.state.person.Bio && (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    marginBottom: "1vh",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.8em",
                      marginLeft: "2vh",
                      marginRight: "2vh",
                    }}
                  >
                    {this.state.person.Bio[0]}
                  </div>
                </div>
              )}
              {(this.state.person.Github ||
                this.state.person.Linkedin ||
                this.state.person.PersonalUrl) && (
                <div
                  style={{
                    height: "6vh",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    margin: "1vh",
                  }}
                >
                  {this.state.person.Linkedin && (
                    <a href={this.state.person.Linkedin}>
                      <IconButton aria-label="LinkedIn">
                        <LinkedInIcon />
                      </IconButton>
                    </a>
                  )}
                  {this.state.person.Github && (
                    <a href={this.state.person.Github}>
                      <IconButton aria-label="Github">
                        <GitHubIcon />
                      </IconButton>
                    </a>
                  )}
                  {this.state.person.PersonalUrl && (
                    <a href={this.state.person.PersonalUrl}>
                      <IconButton aria-label="Personal Website">
                        <LanguageIcon />
                      </IconButton>
                    </a>
                  )}
                </div>
              )}
            </div>
          </Fade>
        </Modal>
      </div>
    );
  }
}
