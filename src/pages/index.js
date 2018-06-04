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
      <section className="livestream-wrapper">
        <Panel title={<h1>Livestream</h1>}>
          Can't make it to the conference? Join us via the livestream and on{" "}
          <a href="https://twitter.com/search?q=%23webrebels">twitter</a>.
          <iframe
            class="livestream"
            height="315"
            src="https://www.youtube.com/watch?v=xP1kbqn3ISo"
            frameborder="0"
            allowfullscreen
          />
        </Panel>
      </section>

      <section className="col-2">
        <Panel title={<h1>JUNE 4th and 5th 2018</h1>}>
          <p>Web Rebels is a one track JavaScript conference happening June 4th and 5th 2018 in beautiful Oslo, Norway.</p>
        </Panel>

        <Panel title={<h1>TICKETS</h1>}>
          <p>We are having three ticket drops. The first two batch of tickets to this years Web Rebels are already sold out. The next batch is planned to go on sale Monday May 7th at 17:00 CEST. <Link to="/tickets">Tickets</Link></p>
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

        <Panel title={<h1>Diversity Scholarship</h1>}>
          <p>
            <span>If you believe you qualify, apply via <a href="https://docs.google.com/forms/d/e/1FAIpQLSeT27UJpI1_pAsvYo3l7cyFY9jp9BXIeZKw5KaY6_RDKO3wKA/viewform">this form</a>. Everyone else, please spread the word, and nudge a person you know to apply.</span>
          </p>
        </Panel>
      </section>


    </div>
  </div>
);

export default IndexPage;
