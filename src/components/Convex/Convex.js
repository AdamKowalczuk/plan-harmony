import React from "react";
import "./convex.scss";
const Convex = (props) => {
  let { w, h } = props;
  return (
    <>
      <div className="convex" style={{ width: w, height: h }}></div>
    </>
  );
};

export default Convex;
