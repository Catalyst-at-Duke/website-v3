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
      color: colors.cherry,
      marginLeft: "24px",
      fontWeight: fonts.weights.bold,
    }}
  >
    {"<q>"}
  </div>
);
const closeQ = () => (
  <div style={{ color: colors.cherry, fontWeight: fonts.weights.bold }}>
    {"</q>"}
  </div>
);

const openA = () => (
  <div
    style={{
      color: colors.catablue,
      marginLeft: "24px",
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
      fontFamily: "monospace",
      fontWeight: fonts.weights.bold,
    }}
  >
    {num < 10 ? "0" : ""}
    {num}
  </div>
);

const question = (text) => (
  <div style={{ color: colors.black, fontWeight: fonts.weights.bold }}>
    {text}
  </div>
);

const answer = (text, offset = false) => (
  <div
    style={{
      color: colors.black,
      fontWeight: fonts.weights.regular,
      marginLeft: offset ? "24px" : "0px",
    }}
  >
    {text}
  </div>
);

const generateFaqComponent = () => {
  const LINE_LENGTH = 12;
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
            {closeQ()}
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
            if (idx == 0 || idx == lines.length - 1) {
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
            {answer(lines[lines.length - 1], true)}
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
            {closeQ()}
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
          <div class="title">
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
              fontSize: "1.3em",
              padding: "30px",
            }}
          >
            {generateFaqComponent()}
          </div>
        </div>
        <div
          className="sidebar"
          style={{
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            top: 0,
            justifyContent: "center",
            marginLeft: 25,
            height: "100%",
            opacity: "50%",
          }}
        >
          <a
            href="mailto:dukecatalyst@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              alt="email Catalyst"
              src={"./mail.png"}
              style={{ width: "50px", marginBottom: 30 }}
            />
          </a>
          <a
            href="https://www.facebook.com/dukecatalyst/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="visit Catalyst's Facebook page"
              src={"./facebook.png"}
              style={{ width: "50px", marginBottom: 30 }}
            />
          </a>
          <a
            href="https://instagram.com/dukecatalyst"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              alt="visit Catalyst's Instagram page"
              src={"./instagram.png"}
              style={{ width: "50px", marginBottom: 30 }}
            />
          </a>
          <a
            href="https://linkedin.com/company/duke-catalyst"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              alt="visit Catalyst's LinkedIn page"
              src={"./linkedin.png"}
              style={{ width: "50px" }}
            />
          </a>
        </div>
      </div>
    );
  }
}
