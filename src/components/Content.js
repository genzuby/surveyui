import React from "react";

// render body or question property
const Content = ({ contentVal }) => {
  return (
    <div className="Content">
      <p>{contentVal}</p>
    </div>
  );
};

export default Content;
