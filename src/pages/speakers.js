import React from "react";

import Panel from "../components/panel";
import Button from "../components/button";
import speakerData from "../data/speakers";
import "./speakers.scss";


function renderSpeaker({ title, name, photoUrl, bio, pageUrl, abstract }) {
  return (
    <Panel title={<h2>{name}</h2>}>
      <img src={photoUrl} />

      {bio.map(paragraph =>
        <p>{paragraph}</p>
      )}

      <h3>{title}</h3>

      {abstract.map(paragraph =>
        <p>{paragraph}</p>
      )}
    </Panel>
  );
}

const SpeakersPage = () => (
  <div className="page">
    <div className="speakers">

      <section className="col-2">
        {speakerData.map(renderSpeaker)}
      </section>

    </div>
  </div>
);

export default SpeakersPage;
