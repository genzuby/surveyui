export const surveylist = [
  {
    questionID: "page-welcome",
    type: "Page",
    heading: "Welcome to the survey",
    body: "You can start the survey by clicking the next button",
    next: "question-email"
  },
  {
    questionID: "page-uneligible",
    type: "Page",
    heading: "Not eligible",
    body: "We're sorry, but you are not eligible to use our producs/services"
  },
  {
    questionID: "page-finish",
    type: "Page",
    heading: "Thank you",
    body: "You have completed the survey"
  },
  {
    questionID: "question-email",
    type: "Text",
    question: "What is your email address?",
    next: "question-age"
  },
  {
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
  },
  {
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
  }
];

export const initData = [
  {
    surveyID: "345f52c7-78f6-4cc4-9f8a-0490744f7da3",
    surveyItems: [
      {
        questionID: "page-welcome",
        type: "Page",
        heading: "Welcome to the survey",
        body: "You can start the survey by clicking the next button",
        next: "question-email"
      },
      {
        questionID: "page-uneligible",
        type: "Page",
        heading: "Not eligible",
        body:
          "We're sorry, but you are not eligible to use our producs/services"
      },
      {
        questionID: "page-finish",
        type: "Page",
        heading: "Thank you",
        body: "You have completed the survey"
      },
      {
        questionID: "question-email",
        type: "Text",
        question: "What is your email address?",
        next: "question-age"
      },
      {
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
      },
      {
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
      }
    ]
  }
];

export const testAnswer = {
  userId: "test3333@gmail.com",
  userInfo: {
    under18: false,
    finished: true
  },
  answeredlist: {
    surveyID: "345f52c7-78f6-4cc4-9f8a-0490744f7da3",
    surveyItems: [
      {
        questionID: "question-problems",
        type: "Checkbox",
        choices: ["dental_implants", "unfilled_cavities"]
      }
    ]
  }
};
