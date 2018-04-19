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
