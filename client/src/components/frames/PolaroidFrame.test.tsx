import React from "react";
import { shallow, configure } from "enzyme";
import PolaroidFrame, { PublicProps } from "./PolaroidFrame";

describe("PhoneFrame with no props", () => {
  const polaroid = shallow(
    <PolaroidFrame
      message={"testing"}
      name={"First Last"}
      photo={"img-src"}
      position={"supreme chairman"}
    />
  );
  it("should match the snapshot", () => {
    expect(polaroid.html()).toMatchSnapshot();
  });
});
