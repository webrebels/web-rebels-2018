import React from "react";
import Link from "gatsby-link";

import Box from "../components/box";
import Panel from "../components/panel";
import Button from "../components/button";
import SignupForm from "../components/signup-form";
import speakerData from "../data/speakers";
import groupPhoto from '../graphics/webrebels.jpg';
import bigPhoto from '../graphics/webrebelBIG.jpg';
import "./index.scss";

const IndexPage = () => (
  <div className="page">
    <div className="index">
      <section className="livestream-wrapper">
          <Panel title={<h1>Photo</h1>}>
              <a href={bigPhoto}>
                  <img src={groupPhoto} alt="Picture of Web Rebels from 2018" />
              </a>
          </Panel>
      </section>
      <section className="col-2">
        <Panel title={<h1>Videos</h1>}>
          Web Rebels 2018 is over and it was amazing! You can relive the moments by watching all the videos from this years conference. Check out the videos ➡
          <iframe
            class="livestream"
            height="315"
            src="https://www.youtube.com/embed/kNc6N54MY3o"
            frameborder="0"
            allowfullscreen
          />
        </Panel>
        <Panel title={<h2>Sponsor 2019?</h2>}>
            <a href="mailto:sponsors[ replace this bracket with a @]webrebels.org" title="Sponsor?">
                Next year it will be the 8th Web Rebels. Want to help out? Send us a note about sponsoring 2019 ➡
            </a>
        </Panel>
        <Panel title={<h1>JUNE 4th and 5th 2018</h1>}>
          <p>Web Rebels is a one track JavaScript conference that was June 4th and 5th 2018 in beautiful Oslo, Norway.</p>
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
            <s><span>If you believe you qualify, apply via <a href="https://docs.google.com/forms/d/e/1FAIpQLSeT27UJpI1_pAsvYo3l7cyFY9jp9BXIeZKw5KaY6_RDKO3wKA/viewform">this form</a>. Everyone else, please spread the word, and nudge a person you know to apply.</span></s>
          </p>
        </Panel>
      </section>


    </div>
  </div>
);

export default IndexPage;
