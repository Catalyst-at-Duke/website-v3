import React from "react";
import { shallow, configure } from "enzyme";
import PhoneFrame from "./PhoneFrame";

describe("PhoneFrame with no props", () => {
  const phone = shallow(<PhoneFrame />);
  it("should match the snapshot", () => {
    expect(phone.html()).toMatchSnapshot();
  });
});
