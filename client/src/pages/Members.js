import React from "react";
import Typist from "react-typist";
import TypistLoop from "react-typist-loop";
import { PolaroidFrame } from "components/frames";
import { FirebaseContext } from "components/firebase";
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
      person: {
        Name: "",
        Order: 0,
        Photo: null,
        Position: "",
      },
    };
  }

  async componentDidMount() {
    if (!DEBUG_MODE) {
      const db = this.props.firebase.db;
      let seniorMembers = [];
      let juniorMembers = [];
      let sophomoreMembers = [];
      let freshmenMembers = [];
      const execRef = db.collection("people").doc("members");
      let doc = await execRef.get();
      let data = doc.data();
      let membersArr = Object.values(data);
      membersArr.sort((a, b) => {
        return a.year - b.year;
      });
      membersArr.forEach((member) => {
        if (member.year === "2022") {
          seniorMembers.push(member);
        } else if (member.year === "2023") {
          juniorMembers.push(member);
        } else if (member.year === "2024") {
          sophomoreMembers.push(member);
        } else if (member.year === "2025") {
          freshmenMembers.push(member);
        }
      });
      this.setState({
        members: seniorMembers,
        seniorMembers: seniorMembers,
        juniorMembers: juniorMembers,
        sophomoreMembers: sophomoreMembers,
        freshmenMembers: freshmenMembers,
        open: false,
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

  handleOpen(person) {
    this.setState({ open: true, person: person });
  }

  handleClose() {
    this.setState({ open: false });
  }

  render() {
    let seniorDivClass;
    let juniorDivClass;
    let sophomoreDivClass;

    let seniorUnderline;
    let juniorUnderline;
    let sophomoreUnderline;
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
      juniorUnderline = sophomoreUnderline = null;
      juniorDivClass = sophomoreDivClass = "members-unselected";
    } else if (this.state.currentClass === 3) {
      juniorUnderline = underline;
      juniorDivClass = "members-selected";
      seniorUnderline = sophomoreUnderline = null;
      seniorDivClass = sophomoreDivClass = "members-unselected";
    } else if (this.state.currentClass === 2) {
      sophomoreUnderline = underline;
      sophomoreDivClass = "members-selected";
      seniorUnderline = juniorUnderline = null;
      seniorDivClass = juniorDivClass = "members-unselected";
    } else if (this.state.currentClass === 1) {
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
            Class of 2022
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
            Class of 2023
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
            Class of 2024
            {sophomoreUnderline}
          </div>
        </div>
        <div
          className="content-members"
          style={{
            display: "flex",
            flexDirection: "row",
            paddingLeft: "5vw",
            paddingRight: "5vw",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {this.state.members &&
            this.state.members.map((person) => {
              return (
                <div
                  onClick={() => this.handleOpen(person)}
                  style={{
                    margin: "30px",
                    cursor: "pointer",
                  }}
                >
                  <PolaroidFrame
                    name={person.name}
                    key={person.name}
                    position={`${
                      (person.catalystclass[0] === "F" ? "Fall " : "Spring ") +
                      "'" +
                      person.catalystclass.substring(1)
                    } Rush Class`}
                    photo={person.photo}
                    message={person.bio}
                  />
                </div>
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
                {/* <div
                  className="heart"
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: "40%",
                    fontSize: "3em",
                  }}
                ></div> */}
                <img
                  alt={this.state.person.name}
                  style={{
                    backgroundColor: colors.black,
                    width: "5vh",
                    height: "5vh",
                    objectFit: "cover",
                    marginLeft: "2vh",
                    borderRadius: "50%",
                  }}
                  src={this.state.person.photo ? this.state.person.photo : ""}
                />
                <div
                  style={{
                    fontSize: fonts.size.small,
                    fontWeight: 500,
                    color: colors.black,
                    marginLeft: "2vh",
                  }}
                >
                  {this.state.person.name}
                </div>
              </div>
              <img
                alt={this.state.person.name}
                onDoubleClick={() => {
                  // this.animateLike();
                }}
                style={{
                  backgroundColor: colors.black,
                  width: "50vh",
                  height: "54vh",
                  objectFit: "cover",
                }}
                src={this.state.person.photo ? this.state.person.photo : ""}
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
              {this.state.person.bio && (
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
                    {this.state.person.bio}
                  </div>
                </div>
              )}
              {(this.state.person.github ||
                this.state.person.linkedinurl ||
                this.state.person.personalurl) && (
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
                  {this.state.person.linkedinurl && (
                    <a href={this.state.person.linkedinurl}>
                      <IconButton aria-label="LinkedIn">
                        <LinkedInIcon />
                      </IconButton>
                    </a>
                  )}
                  {this.state.person.github && (
                    <a href={this.state.person.github}>
                      <IconButton aria-label="Github">
                        <GitHubIcon />
                      </IconButton>
                    </a>
                  )}
                  {this.state.person.personalurl && (
                    <a href={this.state.person.personalurl}>
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
