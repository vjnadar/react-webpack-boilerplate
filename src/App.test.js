import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App.js test", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  it("should check the inner text of the Link.", () => {
    expect(wrapper.find("a").text()).toContain("Learn React");
  });
  it("should check the inner text of the para.", () => {
    expect(wrapper.find("#edit").text()).toBe(
      "Edit src/App.js and save to reload."
    );
  });
  it("should check the number of elements the component has.", () => {
    expect(wrapper.find("header")).toHaveLength(1);
    expect(wrapper.find("img")).toHaveLength(1);
    expect(wrapper.find("p")).toHaveLength(1);
    expect(wrapper.find("a")).toHaveLength(1);
  });
});
