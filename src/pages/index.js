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
        <Panel title={<h1>JUNE 4th & 5th 2018</h1>}>
          <p>Web Rebels is a one track JavaScript conference happening June 4th & 5th 2018 in beautiful Oslo, Norway.</p>
        </Panel>

        <Panel title={<h1>TICKETS</h1>}>
          <p>The tickets for this years conference will cost 4500 NOK. We are having three ticket drops. The first two batch of tickets to this years Web Rebels are already sold out. The next batch is planned to go on sale Monday May 7th at 17:00 CEST.</p>
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
