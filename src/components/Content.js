import React from "react";
// for Adapted web design
import { isMobile } from "react-device-detect";
import { CONTENTTEXT } from "../styles/BodyStyles";

const styles = {
  fontSize: "calc(1.2rem + .2vw)"
};
// render body or question property
const Content = ({ contentVal }) => {
  const adaptedText = () => {
    if (isMobile) {
      return <CONTENTTEXT>{contentVal}</CONTENTTEXT>;
    } else {
      return <CONTENTTEXT style={styles}>{contentVal}</CONTENTTEXT>;
    }
  };

  return <div className="Content">{adaptedText()}</div>;
};

export default Content;
