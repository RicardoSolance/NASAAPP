import React from "react";
import { shallow } from "enzyme";
import ListLandings from "./ListLandings";

describe("ListLandings", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ListLandings />);
    expect(wrapper).toMatchSnapshot();
  });
});
