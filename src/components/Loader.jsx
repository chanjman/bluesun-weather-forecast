import React from "react";

import "./Loader.css";

const Loader = props => {
  return (
    <div
      className="loader-inner"
      title="Loader by Jack Rugile"
      data-link="https://codepen.io/jackrugile/pen/JddmaX">
      <div className="loader-line-wrap">
        <div className="loader-line" />
      </div>
      <div className="loader-line-wrap">
        <div className="loader-line" />
      </div>
      <div className="loader-line-wrap">
        <div className="loader-line" />
      </div>
      <div className="loader-line-wrap">
        <div className="loader-line" />
      </div>
      <div className="loader-line-wrap">
        <div className="loader-line" />
      </div>
    </div>
  );
};

export default Loader;
