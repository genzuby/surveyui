import React from "react";
// for Adapted web design
import { isMobile, isBrowser } from "react-device-detect";
import { INPUT, INPUROTH, INPUROTHWEB } from "../styles/BodyStyles";
import "../styles/assets.scss";

// added styles for web device
const styles = {
  width: "calc(80% - 20vw)"
};

const TypeComp = ({ type, item, inputValue, setInputValue, setInputNext }) => {
  const onHandleCheckItem = e => {
    // If there is next value of belong to this input
    if (e.target.attributes.getNamedItem("data-next")) {
      setInputNext(e.target.attributes.getNamedItem("data-next").value);
    } else {
      setInputNext("");
    }
    // Set Inputvalue
    if (type === "Radio") {
      setInputValue(e.target.id);
    } else if (type === "Checkbox") {
      if (e.target.checked) {
        // when chceckbos selected, add value
        setInputValue([...inputValue, e.target.id]);
        // setInputValue(inputValue.push(e.target.id));
      } else {
        // when chceckbos un selected, delete value
        const arr = [...inputValue];
        arr.splice(arr.indexOf(e.target.id), 1);
        setInputValue(arr);
      }
    }
  };
  const renderCheckRadio = (val, inputType, groupName) => {
    return (
      <>
        <input
          type={inputType}
          name={groupName}
          id={val.value}
          checked={inputValue ? inputValue.includes(val.value) : false}
          data-next={val.next}
          onChange={onHandleCheckItem}
        />
        <label htmlFor={val.value}>{val.label}</label>
      </>
    );
  };

  const renderComp = () => {
    if (type !== "Page" && item && type) {
      const inputType = type.toLowerCase();
      const groupName = item.questionID;

      if (item.choices) {
        return item.choices.map((val, i) => {
          if (isMobile) {
            return (
              <INPUROTH key={i} data-test="typeCompEtcInput" type={inputType}>
                {renderCheckRadio(val, inputType, groupName)}
              </INPUROTH>
            );
          } else {
            return (
              <INPUROTHWEB
                key={i}
                data-test="typeCompEtcInput"
                type={inputType}
              >
                {renderCheckRadio(val, inputType, groupName)}
              </INPUROTHWEB>
            );
          }
        });
      } else if (inputType === "text") {
        if (isMobile) {
          return (
            <INPUT
              type={inputType}
              onChange={e => setInputValue(e.target.value)}
              value={inputValue}
              placeholder="Please enter your e-mail"
              data-test="typeCompTextInput"
            />
          );
        } else if (isBrowser) {
          return (
            <INPUT
              type={inputType}
              onChange={e => setInputValue(e.target.value)}
              style={styles}
              value={inputValue}
              placeholder="Please enter your e-mail"
              data-test="typeCompTextInput"
            />
          );
        }
      }
    }
  };

  return <div className="TypeComp">{renderComp()}</div>;
};

export default TypeComp;
