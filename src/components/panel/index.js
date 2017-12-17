import React from "react";

import "./index.scss";

export default function Panel({ title, children }) {
  return (
    <div className="panel">
      <h1>
        <div className="title-shape" />
        {title}
      </h1>
      <div className="contents">
        {children}
        <div className="right-border" />
        <div className="bottom-border" />
      </div>
    </div>
  );
}
