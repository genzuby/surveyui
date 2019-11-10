// Find object from currentquestion id in array

const getPrevInfo = (surveyitem, currid) => {
  //find currid in object
  if (surveyitem.next === currid) {
    return surveyitem;
  }
  let result;
  for (const p in surveyitem) {
    if (surveyitem.hasOwnProperty(p) && typeof surveyitem[p] === "object") {
      result = getPrevInfo(surveyitem[p], currid);
      if (result) {
        return result;
      }
    }
  }
  return result;
};

// get first page
export const getFirstPage = array => {
  const whichOneisTheFirst = array.reduce((resval, item) => {
    // If type value is page and there is next value,
    //  then looking for finding questionid that is not exist in any next value
    if (item.type === "Page" && item.next) {
      if (!getPrevInfo(item, item.questionID)) {
        return (resval += item.questionID);
      } else {
        return resval;
      }
    } else {
      return resval;
    }
  }, "");
  // return first id
  return whichOneisTheFirst;
};

// check whether First or Last
export const checkFirstLast = (array, currid) => {
  const prevInfo = getPrevInfo(array, currid);
  const lastInfo = array.find(item => item.questionID === currid);

  /* eslint-disable */
  return prevInfo === undefined
    ? "FIRST"
    : lastInfo.next
    ? "SOMEWHERE"
    : "LAST";
};

export const getPrevId = (array, currid) => {
  const prevInfo = getPrevInfo(array, currid);

  return prevInfo.questionID;
};

export const validateEmail = email => {
  // eslint-disable-next-line
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};
