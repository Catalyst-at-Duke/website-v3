import React from "react";
import Typist from "react-typist";
import TypistLoop from "react-typist-loop";
import { colors } from "styles/theme.js";
import { fonts } from "styles/theme.js";
import "styles/styles.css";

const faq = require("./faq.json");

const openQ = () => (
  <div
    style={{
      fontFamily: "Roboto Mono",
      color: colors.cherry,
      marginLeft: "24px",
      fontWeight: fonts.weights.bold,
    }}
  >
    {"<q>"}
  </div>
);
const closeQ = () => (
  <div
    style={{
      color: colors.cherry,
      fontFamily: "Roboto Mono",
      fontWeight: fonts.weights.bold,
    }}
  >
    {"</q>"}
  </div>
);

const openA = () => (
  <div
    style={{
      color: colors.catablue,
      marginLeft: "24px",
      fontFamily: "Roboto Mono",
      fontWeight: fonts.weights.bold,
    }}
  >
    {"<a>"}
  </div>
);

const closeA = () => (
  <div
    style={{
      color: colors.catablue,
      fontFamily: "Roboto Mono",
      fontWeight: fonts.weights.bold,
    }}
  >
    {"</a>"}
  </div>
);

const number = (num) => (
  <div
    style={{
      color: colors.lightGray,
      fontFamily: "Roboto Mono",
      fontWeight: fonts.weights.bold,
    }}
  >
    {num < 10 ? "0" : ""}
    {num}
  </div>
);

const question = (text) => (
  <div
    style={{
      color: colors.black,
      fontFamily: "Roboto Mono",
      fontWeight: fonts.weights.bold,
      textAlign: "left",
      display: "flex",
      direction: "row",
    }}
  >
    {text}
    {closeQ()}
  </div>
);

const answer = (text, offset = false) => (
  <div
    style={{
      color: colors.black,
      fontWeight: fonts.weights.regular,
      fontFamily: "Roboto Mono",
      textAlign: "left",
      marginLeft: offset ? "60px" : "0px",
    }}
  >
    {text}
  </div>
);

const generateFaqComponent = () => {
  const LINE_LENGTH = 10;
  let divLines = [];
  let currentNumber = 1;
  for (let idx = 0; idx < faq.length; idx++) {
    let words = faq[idx].answer.split(" ");
    let text;
    if (words.length > LINE_LENGTH) {
      // split into two lines
      let lines = [];
      let currWord = 0;
      while (currWord < words.length) {
        let text = words.slice(currWord, currWord + LINE_LENGTH);
        lines.push(text.join(" "));
        currWord += LINE_LENGTH;
      }

      text = (
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            {number(currentNumber++)}
            {openQ()}
            {question(faq[idx].question)}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            {number(currentNumber++)}
            {openA()}
            {answer(lines[0])}
          </div>
          {lines.map((line, idx) => {
            if (idx === 0 || idx === lines.length - 1) {
              return null;
            } else {
              return (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  {number(currentNumber++)}
                  {answer(line, true)}
                </div>
              );
            }
          })}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            {number(currentNumber++)}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              {answer(lines[lines.length - 1], true)}
              {closeA()}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            {number(currentNumber++)}
          </div>
        </div>
      );
    } else {
      // just one line
      text = (
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            {number(currentNumber++)}
            {openQ()}
            {question(faq[idx].question)}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            {number(currentNumber++)}
            {openA()}
            {answer(faq[idx].answer)}
            {closeA()}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            {number(currentNumber++)}
          </div>
        </div>
      );
    }

    divLines.push(text);
  }
  return divLines;
};

export default class FaqComponent extends React.Component {
  render() {
    return (
      <div className="app">
        <div
          className="body"
          style={{
            backgroundColor: colors.yellow,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div className="title">
            <TypistLoop interval={100}>
              {["faq", "frequently asked questions"].map((text) => (
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
              display: "flex",
              flexDirection: "column",
              backgroundColor: "white",
              borderRadius: "5px",
              fontSize: "1.3em",
              overflow: "scroll",
              maxHeight: "60%",
              maxWidth: "70%",
              padding: "30px",
            }}
          >
            {generateFaqComponent()}
          </div>
        </div>
      </div>
    );
  }
}
