import React from "react";
import { mount } from "enzyme";
import "../testutils/setup";
import Content from "../components/Content";

describe("Render Content", () => {
  let wrapper;

  beforeEach(() => {
    const props = {
      contentVal: "Test Content Page"
    };
    wrapper = mount(<Content {...props} />);
  });

  describe("Should render without error", () => {
    it("renders correctly", () => {
      expect(wrapper).toMatchSnapshot();
    });

    it("should render one <p>", () => {
      expect(wrapper.find("p")).toHaveLength(1);
    });

    it("Should render with proper text", () => {
      wrapper.setProps({ contentVal: "Test Content Page" });
      expect(wrapper.text()).toEqual("Test Content Page");
    });
  });
});
