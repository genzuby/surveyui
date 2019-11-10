import { FETCH_SURVEY_LIST } from "../actions";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_SURVEY_LIST:
      return action.payload;
    default:
      return state;
  }
};
