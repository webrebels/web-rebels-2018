import React from "react";
import Link from "gatsby-link";

import Box from "../components/box";
import Panel from "../components/panel";
import Button from "../components/button";
import SignupForm from "../components/signup-form";
import speakerData from "../data/speakers";
import "./index.scss";

const IndexPage = () => (
  <div className="page">
    <div className="index">

      <section className="col-2">
        <Panel title={<h1>WEB REBELS 2018 - 4-5th of JUNE</h1>}>
          <p>Web Rebels is a one track JavaScript conference running in beautiful Oslo, Norway.</p>
        </Panel>

        <Panel title={<h1>TICKETS</h1>}>
          <p>Tickets to this years Web Rebels go on sale 24th of April at 14:00 CET.</p>
        </Panel>

      </section>

      <section className="col-1">
        <Panel title={<h1>SPEAKERS</h1>}>
          <div className="speakers col-4">
            {speakerData.map(speaker =>
              <Box {...speaker}  />
            )}
          </div>
        </Panel>
      </section>

      <section className="col-2">
        <Panel title={<h1>NEWSLETTER</h1>}>
          <p>
            <span>Sign up to our newsletter to keep updated.</span>
          </p>
          <SignupForm />
        </Panel>
      </section>

    </div>
  </div>
);

export default IndexPage;
