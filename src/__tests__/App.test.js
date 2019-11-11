import React from "react";
import { shallow } from "enzyme";
import "../testutils/setup";
import { findByTestAttr, testStore } from "../testutils";
import { initData } from "../testutils/testfakedata";
import App from "../components/App";

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<App store={store} />)
    .childAt(0)
    .dive();
  return wrapper;
};

describe("App Component", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = { surveylist: initData, answer: [] };
    wrapper = setUp(initialState);
  });

  it("Should render without errors", () => {
    const component = findByTestAttr(wrapper, "appComponent");
    expect(component.length).toBe(1);
  });
});
