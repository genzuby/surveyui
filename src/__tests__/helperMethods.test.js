import { getFirstPage, getPrevId } from "../components/utils/utilFunctions";
import { surveylist } from "../testutils/testfakedata";

describe("getFirstPage", () => {
  it("Should return fisrtPageId", () => {
    const arr = surveylist;
    const result = getFirstPage(arr);
    expect(result).toEqual("page-welcome");
  });

  it("Should return Previous page id", () => {
    const arr = surveylist;
    const result = getPrevId(arr, "question-email");
    expect(result).toEqual("page-welcome");
  });
});
