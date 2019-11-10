import axios from "axios";
import { POST_ANSWER, BASE_URL } from "./static";

export const answerSurvey = answer => async dispatch => {
  const response = await axios.post(`${BASE_URL}/answers`, answer);

  console.log(answer, response);

  dispatch({
    type: POST_ANSWER,
    payload: response
  });
};
