import React from "react";
import { mount } from "enzyme";
import "../testutils/setup";
import { findByTestAttr } from "../testutils";

import TypeComp from "../components/TypeComp";

describe("Component of each types for display input JSX", () => {
  let wrapper;
  let type, item;

  beforeEach(() => {
    const props = {
      type,
      item
    };
    wrapper = mount(<TypeComp {...props} />);
  });

  describe("Should render without error", () => {
    it("renders correctly", () => {
      expect(wrapper).toMatchSnapshot();
    });

    it("should render one input group", () => {
      const inputGroup = findByTestAttr(wrapper, "typeCompForm");
      expect(inputGroup.length).toBe(1);
    });
  });

  describe("Text Input", () => {
    const item = {
      questionID: "question-email",
      type: "Text",
      question: "What is your email address?",
      next: "question-age"
    };
    it("Should render input when type is Text ", () => {
      wrapper.setProps({ type: "Text", item });
      expect(wrapper.prop("type")).toEqual("Text");
      expect(wrapper.find("input")).toHaveLength(1);
    });
  });

  describe("Radio Input", () => {
    const item = {
      questionID: "question-age",
      type: "Radio",
      question: "Are you 18 or older?",
      choices: [
        {
          label: "Yes",
          value: "yes"
        },
        {
          label: "No",
          value: "no",
          next: "page-uneligible"
        }
      ],
      next: "question-problems"
    };

    it("Should render input when type is Radio ", () => {
      wrapper.setProps({ type: "Radio", item });
      expect(wrapper.prop("type")).toEqual("Radio");
      expect(wrapper.find("input")).toHaveLength(2);
    });
  });

  describe("Checkbox Input", () => {
    const item = {
      questionID: "question-problems",
      type: "Checkbox",
      question: "Do you suffer from any of the following problems?",
      choices: [
        {
          label: "I have dental implants",
          value: "dental_implants"
        },
        {
          label: "I have missing teeth",
          value: "missing_teeth"
        },
        {
          label: "I have unfilled cavities",
          value: "unfilled_cavities"
        },
        {
          label: "I have swollen or inflamed gums",
          value: "swollen_or_inflamed_gums"
        },
        {
          label: "I have retainers",
          value: "retainers"
        },
        {
          label: "None of the above",
          value: "no"
        }
      ],
      next: "page-finish"
    };

    it("Should render input when type is Radio ", () => {
      wrapper.setProps({ type: "Checkbox", item });
      expect(wrapper.prop("type")).toEqual("Checkbox");
      expect(wrapper.find("input")).toHaveLength(6);
    });
  });
});
