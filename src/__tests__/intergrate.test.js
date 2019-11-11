import moxios from "moxios";
import { testStore } from "../testutils";
import { fetchSurvey, answerSurvey } from "../actions";
import { initData, testAnswer } from "../testutils/testfakedata";

describe("fetchpost action", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it("Store is updated correctly from fetched survey list", () => {
    const expectSate = initData;
    const store = testStore();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectSate
      });
    });

    return store.dispatch(fetchSurvey()).then(() => {
      const newState = store.getState();
      expect(newState.surveylist).toBe(expectSate);
    });
  });

  it("Store is updated correctly with post request", () => {
    const expectSate = testAnswer;
    const store = testStore();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectSate
      });
    });

    return store.dispatch(answerSurvey(testAnswer)).then(() => {
      const newState = store.getState();
      expect(newState.answer).toBe(expectSate);
    });
  });
});
