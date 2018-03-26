import React from "react";

import Panel from "../components/panel";
import Button from "../components/button";
import speakerData from "../data/speakers";
import "./speakers.scss";

function renderSpeaker({ talkTitle, name, photoUrl, bio, pageUrl }) {
  return (
    <Panel title={<h2>{talkTitle.split(" ").join("_")}</h2>}>
      <p>
        <span>Speaker: {name}</span>
      </p>
      <img src={photoUrl} />
      <p>{bio}</p>
      <Button to={pageUrl}>Read more</Button>
    </Panel>
  );
}

const Speakers = () => (
  <div className="page-speakers">
    <div className="page-content">
      <section>{speakerData.map(renderSpeaker)}</section>
    </div>
  </div>
);

export default Speakers;
