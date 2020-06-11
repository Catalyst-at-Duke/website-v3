import React from "react";
import { colors, fonts } from "../../styles/theme.js";
import "./cards.css";
import CataTech from "../../images/tech_types.png";

export default class PhoneFrame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      on: true,
    };

    this.powerPhone = this.powerPhone.bind(this);
  }

  powerPhone() {
    this.setState((state) => ({
      on: !state.on,
    }));
  }

  render() {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <div
            class="hbutton"
            style={{ backgroundColor: colors.gray }}
            onClick={this.powerPhone}
          ></div>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div class="phone-outer" style={{ backgroundColor: colors.darkGray }}>
            {!this.state.on ? (
              <div
                class="phone-inner"
                style={{ backgroundColor: colors.black }}
              />
            ) : (
              <div
                class="phone-inner"
                style={{
                  background: `url(${CataTech})`,
                  backgroundPosition: "center",
                }}
              >
                <div class="app-box">
                  <div
                    class="app-icon"
                    style={{ backgroundColor: colors.white }}
                  />
                  <div
                    class="app-icon"
                    style={{ backgroundColor: colors.white }}
                  />
                  <div
                    class="app-icon"
                    style={{ backgroundColor: colors.white }}
                  />
                  <div
                    class="app-icon"
                    style={{ backgroundColor: colors.white }}
                  />
                  <div
                    class="app-icon"
                    style={{ backgroundColor: colors.white }}
                  />
                  <div
                    class="app-icon"
                    style={{ backgroundColor: colors.white }}
                  />
                  <div
                    class="app-icon"
                    style={{ backgroundColor: colors.white }}
                  />
                  <div
                    class="app-icon"
                    style={{ backgroundColor: colors.white }}
                  />
                </div>
                <div
                  class="flex-box"
                  style={{ position: "relative", bottom: "0" }}
                >
                  <div
                    class="circle"
                    style={{ backgroundColor: colors.lightGray }}
                  ></div>
                  <div
                    class="circle"
                    style={{ backgroundColor: colors.white }}
                  ></div>
                </div>
              </div>
            )}
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              class="vbutton"
              style={{ backgroundColor: colors.gray, marginTop: "40px" }}
            ></div>
            <div
              class="vbutton"
              style={{ backgroundColor: colors.gray, marginTop: "1px" }}
            ></div>
          </div>
        </div>
      </div>
    );
  }
}
