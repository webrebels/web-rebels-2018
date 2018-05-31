import React from "react";

import "./index.scss";

export default function Panel({ title, children, id }) {
  return (
    <div className="panel" id={id}>
      <div className="title-wrapper">
        <div className="title-shape" />
        <div className="title-container">{title}</div>
      </div>
      <div className="contents-wrapper">
        <div className="contents">{children}</div>
        <div className="right-border" />
        <div className="bottom-border" />
      </div>
    </div>
  );
}
