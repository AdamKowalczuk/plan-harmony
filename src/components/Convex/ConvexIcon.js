import React from "react";
import "./convexIcon.scss";
const ConvexIcon = (props) => {
  let { w, iw, icon, alt } = props;
  return (
    <>
      <div className="convex-icon" style={{ width: w, height: w }}>
        <img style={{ width: iw, height: iw }} src={icon} alt={alt} />
      </div>
    </>
  );
};

export default ConvexIcon;
