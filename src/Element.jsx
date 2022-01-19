import "./Element.css";
import React from "react";
const Element = ({ elementRef }) => {
  return (
    <div className="logo" ref={elementRef}>
      <img src="https://cdn.wallpapersafari.com/53/85/upiEBU.jpg" alt="logo" />
    </div>
  );
};

export default Element;
