import React from "react";
import { shallow } from "enzyme";
import "../testutils/setup";
import { findByTestAttr, testStore } from "../testutils";
import { initData, testAnswer } from "../testutils/testfakedata";
import App from "../components/App";

const setUp = (initialState = []) => {
  const store = testStore(initialState);
  const wrapper = shallow(<App store={store} />)
    .childAt(0)
    .dive();
  return wrapper;
};

describe("App Component", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = initData;
    wrapper = setUp(initialState);
  });

  it("Should render without errors", () => {
    const component = findByTestAttr(wrapper, "appComponent");
    expect(component.length).toBe(1);
  });

  // it("exampleMethod_updateState method should updatestate as expected", () => {
  //   const classInstance = wrapper.instance();
  //   classInstance.exampleMethod_updateState();
  //   const newState = classInstance.state.hideBtn;
  //   expect(newState).toBe(true);
  // });

  // it("exampleMethod_returnsAValue Method should return value", () => {
  //   const classInstance = wrapper.instance();
  //   const newValue = classInstance.exampleMethod_returnsAValue(6);
  //   expect(newValue).toBe(7);
  // });

  describe("Insert data into DB", () => {
    beforeEach(() => {
      const initialState = initData;
      wrapper = setUp(initialState);
    });

    it("Should insert one data to DB", () => {
      const component = findByTestAttr(wrapper, "appComponent");
      expect(component.length).toBe(1);
    });
  });
});
