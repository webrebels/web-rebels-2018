import React from "react";

import "./index.scss";

export default function Box({ name, photoUrl }) {
  const url = `/speakers/#${name.toLowerCase().replace(' ', '_')}`;
  return (
    <div className="box">
      <a href={url}><img src={photoUrl} /></a>
      <h3><a href={url}>{name}</a></h3>
    </div>
  );
}
