import { POST_ANSWER } from "../actions";

export default (state = [], action) => {
  switch (action.type) {
    case POST_ANSWER:
      return action.payload;
    default:
      return state;
  }
};
