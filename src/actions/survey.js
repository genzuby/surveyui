import axios from "axios";
import { FETCH_SURVEY_LIST, BASE_URL } from "./static";

export const fetchSurvey = () => async dispatch => {
  const response = await axios.get(`${BASE_URL}/surveys`);

  dispatch({
    type: FETCH_SURVEY_LIST,
    payload: response.data
  });
};
