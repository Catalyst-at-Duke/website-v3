import React, { useState } from "react";
import { colors } from "../../styles/theme.js";
import "./style.css";
import CataTech from "../../images/tech_types.png";

const PhoneFrame = () => {
  const [isPhoneOn, setIsPhoneOn] = useState(true);

  const togglePhone = () => {
    setIsPhoneOn(!isPhoneOn);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <div
          className={"hbutton"}
          style={{ backgroundColor: colors.gray }}
          onClick={togglePhone}
        ></div>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          className={"phone-outer"}
          style={{ backgroundColor: colors.darkGray }}
        >
          {!isPhoneOn ? (
            <div
              className={"phone-inner"}
              style={{ backgroundColor: colors.black }}
            />
          ) : (
            <div
              className={"phone-inner"}
              style={{
                background: `url(${CataTech})`,
                backgroundPosition: "center",
              }}
            >
              <div className={"app-box"}>
                <div
                  className={"app-icon"}
                  style={{ backgroundColor: colors.white }}
                />
                <div
                  className={"app-icon"}
                  style={{ backgroundColor: colors.white }}
                />
                <div
                  className={"app-icon"}
                  style={{ backgroundColor: colors.white }}
                />
                <div
                  className={"app-icon"}
                  style={{ backgroundColor: colors.white }}
                />
                <div
                  className={"app-icon"}
                  style={{ backgroundColor: colors.white }}
                />
                <div
                  className={"app-icon"}
                  style={{ backgroundColor: colors.white }}
                />
                <div
                  className={"app-icon"}
                  style={{ backgroundColor: colors.white }}
                />
                <div
                  className={"app-icon"}
                  style={{ backgroundColor: colors.white }}
                />
              </div>
              <div
                className={"flex-box"}
                style={{ position: "relative", bottom: "0" }}
              >
                <div
                  className={"circle"}
                  style={{ backgroundColor: colors.lightGray }}
                ></div>
                <div
                  className={"circle"}
                  style={{ backgroundColor: colors.white }}
                ></div>
              </div>
            </div>
          )}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            className={"vbutton"}
            style={{ backgroundColor: colors.gray, marginTop: "40px" }}
          ></div>
          <div
            className={"vbutton"}
            style={{ backgroundColor: colors.gray, marginTop: "1px" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default PhoneFrame;
