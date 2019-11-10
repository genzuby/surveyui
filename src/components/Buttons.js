import React from "react";
// for Adapted web design
import { isMobile, isBrowser } from "react-device-detect";
import { BUTTON } from "../styles/BodyStyles";

const styles = {
  width: "calc(50% - 20vw)"
};

const Buttons = ({ first, last, onHandle }) => {
  //  when first is true then previous button disable
  //  when last is true then next button disable
  const { onPrevButtonHandle, onNextButtonHandle } = onHandle;

  const renderWeb = () => {
    if (isMobile) {
      return (
        <>
          <BUTTON available={!first} onClick={onPrevButtonHandle}>
            ◁ Previous
          </BUTTON>
          <BUTTON available={!last} onClick={onNextButtonHandle}>
            Next ▷
          </BUTTON>
        </>
      );
    } else if (isBrowser) {
      return (
        <>
          <BUTTON
            available={!first}
            onClick={onPrevButtonHandle}
            style={styles}
          >
            ◁ Previous
          </BUTTON>
          <BUTTON available={!last} onClick={onNextButtonHandle} style={styles}>
            Next ▷
          </BUTTON>
        </>
      );
    }
  };
  return <div className="Buttons">{renderWeb()}</div>;
};

export default Buttons;
