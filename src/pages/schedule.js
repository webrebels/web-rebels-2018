import React from "react";
import Link from "gatsby-link";

import Box from "../components/box";
import Panel from "../components/panel";
import Button from "../components/button";
import SignupForm from "../components/signup-form";
import speakerData from "../data/speakers";
import "./schedule.scss";

const DAY1 = [
  {
    when: ["08:00"],
    title: "Registration and breakfast",
    description:
      "As the tradition goes, no need for that hotel breakfast. Join us for a Rebel breakfast instead.",
    kind: "info"
  },
  {
    when: ["09:00"],
    title: "Patricia Aas",
    description: "Reading other peoples code",
    kind: "talk"
  },
  {
    when: ["09:45"],
    title: "Mathieu 'p01' Henri",
    description: "A testing story in 3 acts",
    kind: "talk"
  },
  {
    when: ["10:30"],
    title: "Coffee/tea break",
    description: "",
    kind: "pause"
  },
  {
    when: ["11:00"],
    title: "Maxim Salnikov",
    description:
      "Service Worker: taking the best from the past experience for the bright future of PWAs",
    kind: "talk"
  },
  {
    when: ["11:45"],
    title: "Tor Martin Storsletten, Tom Widerøe and Lotte Johansen,",
    description: "How to make accessible web when the ideal does not match reality?",
    kind: "talk"
  },
  {
    when: ["12:30"],
    title: "Lunch",
    description: (
      <span>
        Across the river at{" "}
        <a href="/about#nedre_foss_info">Nedre Foss Gård.</a>
      </span>
    ),
    kind: "pause"
  },
  {
    when: ["13:30"],
    title: "Sigurd Schneider",
    description: "Inside V8: The choreography of Ignition and TurboFan",
    kind: "talk"
  },
  {
    when: ["14:15"],
    title: "Ivan Jovanovic",
    description: "Thinking Reactive in JavaScript",
    kind: "talk"
  },
  {
    when: ["15:00"],
    title: "Coffee/tea break",
    description: "",
    kind: "pause"
  },
  {
    when: ["15:30"],
    title: "Michael Geers",
    description:
      "Micro Frontends - Think Smaller, Avoid the Monolith, Love the Backend",
    kind: "talk"
  },
  {
    when: ["16:15"],
    title: "Stefan Judis",
    description: "What the v...DOM?",
    kind: "talk"
  },
  {
    when: ["17:00"],
    title: "Martin Splitt",
    description: "TBA",
    kind: "talk"
  },
  {
    when: ["18:00"],
    title: "Conference dinner and social gathering",
    description: (
      <span>
        About 3 minutes walk down the road to{" "}
        <a href="/about#party_info">Ingensteds</a>
      </span>
    ),
    kind: "party"
  }
];

const DAY2 = [
  {
    when: ["08:00"],
    title: "Breakfast",
    description: "As always, we start the day with a good old Rebel breakfast",
    kind: "info"
  },
  {
    when: ["09:00"],
    title: "John Papa",
    description: "TBA",
    kind: "talk"
  },
  {
    when: ["09:45"],
    title: "Emil Bay",
    description: "Hand-crafting WebAssembly",
    kind: "talk"
  },
  {
    when: ["10:30"],
    title: "Coffee/tea break",
    description: "",
    kind: "pause"
  },
  {
    when: ["11:00"],
    title: "Ernie Turner",
    description: "Dodging Web Crypto API Landmines",
    kind: "talk"
  },
  {
    when: ["11:45"],
    title: "Luciano Mammino",
    description:
      "Cracking JWT tokens: a tale of magic, Node.JS and parallel computing",
    kind: "talk"
  },
  {
    when: ["12:30"],
    title: "Lunch",
    description: (
      <span>
        Right next door at <a href="/about#mathallen_info">Mathallen.</a>{" "}
        Different to monday!
      </span>
    ),
    kind: "pause"
  },
  {
    when: ["13:30"],
    title: "Monika Kedrova",
    description: "Building virtual worlds with web technologies",
    kind: "talk"
  },
  {
    when: ["14:15"],
    title: "Madlaina Kalunder",
    description: "Building a ray tracer in Javascript",
    kind: "talk"
  },
  {
    when: ["15:00"],
    title: "Coffee/tea break",
    description: "",
    kind: "pause"
  },
  {
    when: ["15:30"],
    title: "Michaela Lehr",
    description:
      "Using New Web APIs For Your Own Pleasure – How I Wrote New Features For My Vibrator using the Web Bluetooth API and the Web Audio API",
    kind: "talk"
  },
  {
    when: ["16:15"],
    title: "Joe Karlsson",
    description: "Building High Performance React Applications",
    kind: "talk"
  },
  {
    when: ["17:00"],
    title: "Group photo - end",
    description: "As tradition goes we take a group photo of everyone",
    kind: "party"
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
      <section className="col-1">
        <Panel title={<h1>Monday_June_4</h1>}>
          <EventList events={DAY1} />
        </Panel>
        <Panel title={<h1>Tuesday_June_5</h1>}>
          <EventList events={DAY2} />
        </Panel>
      </section>
    </div>
  </div>
);

export default SchedulePage;
