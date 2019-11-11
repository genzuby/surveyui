import { FETCH_SURVEY_LIST, POST_ANSWER } from "../actions";
import answerReducer from "../reducers/answerReducer";
import surveyReducer from "../reducers/surveyReducer";
import { initData, testAnswer } from "../testutils/testfakedata";

describe("surveyReducer ", () => {
  it("Should return default state", () => {
    const newState = surveyReducer(undefined, {});

    expect(newState).toEqual([]);
  });

  it("Should return new state from FETCH_SURVEY_LIST ", () => {
    const surveylist = initData;
    const newState = surveyReducer(undefined, {
      type: FETCH_SURVEY_LIST,
      payload: surveylist
    });
    expect(newState).toEqual(surveylist);
  });

  it("Should return new state from POST_ANSWER ", () => {
    const answer = testAnswer;
    const newState = answerReducer(undefined, {
      type: POST_ANSWER,
      payload: answer
    });
    expect(newState).toEqual(testAnswer);
  });
});
