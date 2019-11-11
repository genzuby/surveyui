import React from "react";
import { mount } from "enzyme";
import "jest-styled-components";
import "../testutils/setup";
import { findByTestAttr } from "../testutils";
import Buttons from "../components/Buttons";
import { BUTTON } from "../styles/BodyStyles";

describe("Buttons Component", () => {
  describe("Render Buttons", () => {
    let wrapper;
    let prevFunc, nextFnc;
    let first, last;

    beforeEach(() => {
      prevFunc = jest.fn();
      nextFnc = jest.fn();
      const props = {
        first,
        last,
        onHandle: {
          onPrevButtonHandle: prevFunc,
          onNextButtonHandle: nextFnc
        }
      };
      wrapper = mount(<Buttons {...props} />);
    });

    describe("Snapshot test", () => {
      it("renders correctly", () => {
        expect(wrapper).toMatchSnapshot();
      });

      it("should render two <button>", () => {
        expect(wrapper.find("button")).toHaveLength(2);
      });

      it("Previous button at the frist page should not be available", () => {
        wrapper.setProps({ first: true, last: false });
        const button = findByTestAttr(wrapper.find(BUTTON), "prevBtnComponent");

        expect(button).toHaveStyleRule("background", "var(--disable--bg)");
      });

      it("Next button at the frist page should be available ", () => {
        wrapper.setProps({ first: true, last: false });
        const button = findByTestAttr(wrapper.find(BUTTON), "nextBtnComponent");
        expect(button).toHaveStyleRule("background", "var(--available--bg)");
      });

      it("Previous button at the middle page should not be available", () => {
        wrapper.setProps({ first: false, last: false });
        expect(wrapper.find(BUTTON)).toHaveStyleRule(
          "background",
          "var(--available--bg)"
        );
      });

      it("Next button at the middle page should be available ", () => {
        wrapper.setProps({ first: false, last: false });
        expect(wrapper.find(BUTTON)).toHaveStyleRule(
          "background",
          "var(--available--bg)"
        );
      });

      it("Previous button at the last page should not be available", () => {
        wrapper.setProps({ first: true, last: true });
        expect(wrapper.find(BUTTON)).toHaveStyleRule(
          "background",
          "var(--disable--bg)"
        );
      });

      it("Next button at the last page should not be available", () => {
        wrapper.setProps({ first: true, last: true });
        expect(wrapper.find(BUTTON)).toHaveStyleRule(
          "background",
          "var(--disable--bg)"
        );
      });
    });
  });
});
