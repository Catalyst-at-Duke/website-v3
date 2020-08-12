import React from "react";
import { shallow, configure } from "enzyme";
import { PhoneFrame } from ".";

describe("PhoneFrame with no props", () => {
  const phone = shallow(<PhoneFrame />);
  it("should match the snapshot", () => {
    expect(phone.html()).toMatchSnapshot();
  });
});
