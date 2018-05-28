import React from "react";
import Link from "gatsby-link";

import Box from "../components/box";
import Panel from "../components/panel";
import Button from "../components/button";
import SignupForm from "../components/signup-form";
import speakerData from "../data/speakers";
import "./schedule.scss";

const EVENTS = [
  {
    when: ["08", <br />, ":00"],
    title: "Registration and breakfast",
    description:
      "As the tradition goes, no need for that hotel breakfast. Join us for a Rebel breakfast instead.",
    kind: "info"
  },
  {
    when: ["08", <br />, ":00"],
    title: "Who",
    description: "What",
    kind: "talk"
  },
  {
    when: ["08", <br />, ":00"],
    title: "What",
    description: "Where",
    kind: "info"
  },
  {
    when: ["08", <br />, ":00"],
    title: "What",
    description: "Where",
    kind: "pause"
  }
];

const Event = ({ children, when, kind }) => (
  <div className={`event ${kind || ""}`}>
    <div className="when">
      <span className="content">{when}</span>
    </div>
    <div className="what">{children}</div>
  </div>
);

function EventList({ events }) {
  return events.map((event, index) => (
    <Event when={event.when} kind={event.kind} key={index}>
      <h4 className="event-title">{event.title}</h4>
      {event.description}
    </Event>
  ));
}

const SchedulePage = () => (
  <div className="page">
    <div className="schedule">
      <section className="col-2">
        <Panel title={<h1>Monday_June_4</h1>}>
          <Event when={["DAY", <br />, "_01"]}>Something</Event>
        </Panel>
        <Panel title={<h1>Tuesday_June_5</h1>}>
          <EventList events={EVENTS} />
        </Panel>
      </section>
    </div>
  </div>
);

export default SchedulePage;
