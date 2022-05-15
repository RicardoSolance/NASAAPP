import React from "react";
import { shallow } from "enzyme";
import CardInfo from "./CardInfo";

describe("CardInfo", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<CardInfo />);
    expect(wrapper).toMatchSnapshot();
  });
});
