import React from "react";
import Link from "gatsby-link";

import imageryUrl from "../graphics/imagery.png";
import Panel from "../components/panel";
import Button from "../components/button";
import SignupForm from "../components/signup-form";
import "./index.scss";

const IndexPage = () => (
  <div className="page-index">
    <div className="image-wrapper">
      <img className="imagery" src={imageryUrl} alt="Oslo city scape" />
      <div className="panel-wrapper">
        <Panel title={<h1>WR_OSLO_JUNE_4_5</h1>}>
          <p>
            <span>More information coming soon.</span>
          </p>
          {/* <p>
            <span>
              Want to sponsor us? Head over to <a href="/sponsors">sponsors</a>.
            </span>
          </p> */}
          <p>
            <span>Sign up to our newsletter to keep updated.</span>
          </p>
          <SignupForm />
        </Panel>
      </div>
    </div>
  </div>
);

export default IndexPage;
