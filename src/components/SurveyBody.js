import React, { useState, useContext, useEffect } from "react";
import { connect } from "react-redux";
// for Adapted web design
import { isMobile, isBrowser } from "react-device-detect";
// style component
import { BODY, BODYWEB } from "../styles/BodyStyles";
import { SurveyContext } from "../contexts/SurveyAnswerCotext";
import { answerSurvey } from "../actions";

// helper methods
import {
  getFirstPage,
  checkFirstLast,
  getPrevId,
  validateEmail
} from "./utils/utilFunctions";

// import components
import Buttons from "./Buttons";
import Content from "./Content";
import TypeComp from "./TypeComp";

const SurveyBody = ({ surveylist, answerSurvey }) => {
  const { answerInfo, setAnswerInfo } = useContext(SurveyContext);
  const [currentInfo, setCurrentInfo] = useState({});
  const [firstPage, setFirstFage] = useState(false);
  const [lastPage, setLastFage] = useState(false);
  const [inputValue, setInputValue] = useState([]);
  const [inputNext, setInputNext] = useState("");

  // set Inital context
  useEffect(() => {
    // when data fetched
    if (surveylist.length > 0) {
      const { surveyID, surveyItems } = surveylist[0];
      // check if there is context data, to check if inital survey or not
      if (!answerInfo.currentID) {
        // get first page id from fetched data
        const firstId = getFirstPage(surveyItems);
        // get detail data based on first question id
        const currentVal = surveyItems.find(
          item => item.questionID === firstId
        );
        // modify context info with basic info
        setAnswerInfo({ surveyID, currentID: firstId });
        //  first page or not
        setFirstFage(true);
        //  set status to distribute into to children
        setCurrentInfo(currentVal);
      }
    }
  }, [surveylist, answerInfo, currentInfo, setCurrentInfo, setAnswerInfo]);

  // on click previos button
  const onPrevButtonHandle = () => {
    if (surveylist.length > 0) {
      const { surveyItems } = surveylist[0];

      // Get Previous Information if it's not a first page
      if (!firstPage) {
        // Get previous id and info
        const prevID = getPrevId(surveyItems, currentInfo.questionID);
        const currentVal = surveyItems.find(item => item.questionID === prevID);

        // get Previous page Info and state update
        setCurrentInfo(currentVal);

        // find context info and setInputvalue
        if (prevID === "question-email") {
          setInputValue(answerInfo.email);
        } else if (prevID === "question-age") {
          setInputValue(answerInfo.over18);
        }

        //  save current Info into Context
        saveContextInfo("PREV", prevID);

        // check next page is the fitsr page ot not
        const position = checkFirstLast(surveyItems, prevID);
        position === "FIRST" ? setFirstFage(true) : setFirstFage(false);

        // not the last page anymore
        setLastFage(false);
      }
    }
  };

  // on click next button
  const onNextButtonHandle = () => {
    if (surveylist.length > 0) {
      const { surveyItems } = surveylist[0];
      if (!lastPage) {
        // Get next id
        const nextId = inputNext ? inputNext : currentInfo.next;

        // get next page Info and state update
        const currentVal = surveyItems.find(item => item.questionID === nextId);

        // validataion check
        if (!inputValidation()) {
          return;
        }

        setCurrentInfo({});
        setCurrentInfo(currentVal);

        //  save current Info into Context
        saveContextInfo("NEXT", nextId);

        // current position check
        const position = checkFirstLast(surveyItems, nextId);

        // when Last Page then update state
        if (position === "LAST") {
          setFirstFage(true);
          setLastFage(true);
        } else {
          setFirstFage(false);
          setLastFage(false);
        }

        // set inital state of input value and input next
        setInputValue([]);
        setInputNext("");

        //  if poistion is last postion insert data
        if (position === "LAST") {
          uploadDataToDB();
        }
      }
    }
  };

  // context info save
  const saveContextInfo = (option, targetId) => {
    setAnswerInfo({
      ...answerInfo,
      currentID: targetId
    });

    // when click next button and type is not page add data
    if (option === "NEXT" && currentInfo.type !== "Page") {
      if (currentInfo.questionID === "question-email") {
        setAnswerInfo(Object.assign(answerInfo, { email: inputValue }));
      } else if (currentInfo.questionID === "question-age") {
        setAnswerInfo(Object.assign(answerInfo, { over18: inputValue }));
      } else {
        setAnswerInfo(
          Object.assign(answerInfo, {
            questions: [
              {
                questionID: currentInfo.questionID,
                type: currentInfo.type,
                choices: inputValue
              }
            ]
          })
        );
      }
    }
  };

  // Data insert into DB
  const uploadDataToDB = () => {
    const answerBody = {
      userId: answerInfo.email,
      userInfo: {
        under18: inputNext ? true : false,
        finished: inputNext ? false : true
      },
      answeredlist: [
        {
          surveyID: answerInfo.surveyID,
          surveyItems: answerInfo.questions
        }
      ]
    };
    // post data
    answerSurvey(answerBody);
  };

  const inputValidation = () => {
    // find input value and cheack each item next value
    //  when found next value ==> display warning
    if (currentInfo.type === "Page") {
      return true;
    } else {
      if (inputValue.length === 0) {
        //  it here is input value(s)
        alert("Please input(or check) one(or more) item.");
        return false;
      } else {
        // email validation check
        if (currentInfo.questionID === "question-email") {
          if (validateEmail(inputValue)) {
            return true;
          } else {
            alert("Please input valid email address!");
            return false;
          }
        }
        return true;
      }
    }
  };

  const renderComponent = () => (
    <>
      <div className="Header" data-test="bodyComponentSection">
        {currentInfo.heading && (
          <h1 className="Heading">{currentInfo.heading}</h1>
        )}
        <Content
          contentVal={currentInfo.body || currentInfo.question}
          type={currentInfo.type}
        />
      </div>
      <TypeComp
        type={currentInfo.type}
        item={currentInfo}
        inputValue={inputValue}
        setInputValue={setInputValue}
        setInputNext={setInputNext}
        data-test="bodyComponentSection"
      />
      <Buttons
        first={firstPage}
        last={lastPage}
        onHandle={{ onPrevButtonHandle, onNextButtonHandle }}
        data-test="bodyComponentSection"
      />
    </>
  );

  return (
    <>
      {/* Mobile view */}
      {isMobile && (
        <BODY
          className="SurveyBody"
          // to make button disable, when the page get to the last, set first also true.
          // So need to back to normal.
          first={lastPage ? false : firstPage}
          last={lastPage}
        >
          {renderComponent()}
        </BODY>
      )}
      {/* web view */}
      {isBrowser && (
        <BODYWEB
          className="SurveyBody"
          first={lastPage ? false : firstPage}
          last={lastPage}
        >
          {renderComponent()}
        </BODYWEB>
      )}
    </>
  );
};

const mapStateToProps = ({ surveylist }) => {
  return { surveylist };
};

export default connect(
  mapStateToProps,
  { answerSurvey }
)(SurveyBody);
