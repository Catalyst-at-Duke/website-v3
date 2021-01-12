import React from "react";
import Typist from "react-typist";
import TypistLoop from "react-typist-loop";

import { colors } from "styles/theme.js";
import { fonts } from "styles/theme.js";
import "styles/styles.css";

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
              {["faq", ""].map((text) => (
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
              padding: "30px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div
                style={{
                  color: colors.lightGray,
                  fontWeight: fonts.weights.bold,
                }}
              >
                1
              </div>
              <div
                style={{
                  color: colors.cherry,
                  marginLeft: "24px",
                  fontWeight: fonts.weights.bold,
                }}
              >
                {"<q>"}
              </div>
              <div
                style={{ color: colors.black, fontWeight: fonts.weights.bold }}
              >
                I would love to work with Catalyst. How can I reach out?
              </div>
              <div
                style={{ color: colors.cherry, fontWeight: fonts.weights.bold }}
              >
                {"</q>"}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div
                style={{
                  color: colors.lightGray,
                  fontWeight: fonts.weights.bold,
                }}
              >
                2
              </div>
              <div
                style={{
                  color: colors.catablue,
                  marginLeft: "24px",
                  fontWeight: fonts.weights.bold,
                }}
              >
                {"<a>"}
              </div>
              <div
                style={{
                  color: colors.black,
                  fontWeight: fonts.weights.regular,
                }}
              >
                Please email us! We're always looking to collaborate with
                different folks around campus.
              </div>
              <div
                style={{
                  color: colors.catablue,
                  fontWeight: fonts.weights.bold,
                }}
              >
                {"</a>"}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div
                style={{
                  color: colors.lightGray,
                  fontWeight: fonts.weights.bold,
                }}
              >
                3
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div
                style={{
                  color: colors.lightGray,
                  fontWeight: fonts.weights.bold,
                }}
              >
                4
              </div>
              <div
                style={{
                  color: colors.cherry,
                  marginLeft: "24px",
                  fontWeight: fonts.weights.bold,
                }}
              >
                {"<q>"}
              </div>
              <div
                style={{ color: colors.black, fontWeight: fonts.weights.bold }}
              >
                How can I join?
              </div>
              <div
                style={{ color: colors.cherry, fontWeight: fonts.weights.bold }}
              >
                {"</q>"}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div
                style={{
                  color: colors.lightGray,
                  fontWeight: fonts.weights.bold,
                }}
              >
                5
              </div>
              <div
                style={{
                  color: colors.catablue,
                  marginLeft: "24px",
                  fontWeight: fonts.weights.bold,
                }}
              >
                {"<a>"}
              </div>
              <div
                style={{
                  color: colors.black,
                  fontWeight: fonts.weights.regular,
                }}
              >
                Lucky you! We hold rush each fall and spring, but the upcoming
                semester may be different.
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div
                style={{
                  color: colors.lightGray,
                  fontWeight: fonts.weights.bold,
                }}
              >
                6
              </div>
              <div
                style={{
                  color: colors.black,
                  marginLeft: "24px",
                  fontWeight: fonts.weights.regular,
                }}
              >
                Join our Facebook page for more information.
              </div>
              <div
                style={{
                  color: colors.catablue,
                  fontWeight: fonts.weights.bold,
                }}
              >
                {"</a>"}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div
                style={{
                  color: colors.lightGray,
                  fontWeight: fonts.weights.bold,
                }}
              >
                7
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div
                style={{
                  color: colors.lightGray,
                  fontWeight: fonts.weights.bold,
                }}
              >
                8
              </div>
              <div
                style={{
                  color: colors.cherry,
                  marginLeft: "24px",
                  fontWeight: fonts.weights.bold,
                }}
              >
                {"<q>"}
              </div>
              <div
                style={{ color: colors.black, fontWeight: fonts.weights.bold }}
              >
                Are your events open to everyone?
              </div>
              <div
                style={{ color: colors.cherry, fontWeight: fonts.weights.bold }}
              >
                {"</q>"}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div
                style={{
                  color: colors.lightGray,
                  fontWeight: fonts.weights.bold,
                }}
              >
                9
              </div>
              <div
                style={{
                  color: colors.catablue,
                  marginLeft: "24px",
                  fontWeight: fonts.weights.bold,
                }}
              >
                {"<a>"}
              </div>
              <div
                style={{
                  color: colors.black,
                  fontWeight: fonts.weights.regular,
                }}
              >
                Some of our events are open to everyone at Duke, and we would
                love to have you there.
              </div>
              <div
                style={{
                  color: colors.catablue,
                  fontWeight: fonts.weights.bold,
                }}
              >
                {"</a>"}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div
                style={{
                  color: colors.lightGray,
                  fontWeight: fonts.weights.bold,
                }}
              >
                10
              </div>
            </div>
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
