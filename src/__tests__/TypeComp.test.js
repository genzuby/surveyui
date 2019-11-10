import React from "react";
import { mount } from "enzyme";
import "../testutils/setup";
import { findByTestAttr } from "../testutils";

import TypeComp from "../components/TypeComp";

describe("Component of each types for display input JSX", () => {
  describe("Text Input", () => {
    const item = {
      questionID: "question-email",
      type: "Text",
      question: "What is your email address?",
      next: "question-age"
    };
    const type = "Text";

    const wrapper = mount(<TypeComp type={type} item={item} />);

    it("Should render without errors", () => {
      const component = findByTestAttr(wrapper, "typeCompForm");
      expect(component.length).toBe(1);
    });

    it("Should render input when type is Text ", () => {
      const component = findByTestAttr(wrapper, "typeCompTextInput");
      expect(component.find("Text").length).toBe(1);
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
    const type = "Radio";

    const wrapperradio = mount(<TypeComp type={type} item={item} />);

    it("Should render without errors", () => {
      const component = findByTestAttr(wrapperradio, "typeCompForm");
      expect(component.length).toBe(1);
    });

    it("Should render input when type is Radio ", () => {
      const component = findByTestAttr(wrapperradio, "typeCompEtcInput");
      expect(component.length).toBe(2);
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
    const type = "Checkbox";

    const wrappercheck = mount(<TypeComp type={type} item={item} />);

    it("Should render without errors", () => {
      const component = findByTestAttr(wrappercheck, "typeCompForm");
      expect(component.length).toBe(1);
    });

    it("Should render input when type is Radio ", () => {
      const component = findByTestAttr(wrappercheck, "typeCompEtcInput");
      expect(component.length).toBe(6);
    });
  });
});
