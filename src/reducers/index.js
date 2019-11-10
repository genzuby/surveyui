import { combineReducers } from "redux";
import surveyReducer from "./surveyReducer";
import answerReducer from "./answerReducer";

export default combineReducers({
  surveylist: surveyReducer,
  answer: answerReducer
});
