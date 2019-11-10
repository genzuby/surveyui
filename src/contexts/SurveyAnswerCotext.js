import React, { useState, createContext } from "react";

// Create context
export const SurveyContext = createContext(null);

export const SurveyAnswerStore = props => {
  const [answerInfo, setAnswerInfo] = useState({});

  return (
    <SurveyContext.Provider value={{ answerInfo, setAnswerInfo }}>
      {props.children}
    </SurveyContext.Provider>
  );
};
