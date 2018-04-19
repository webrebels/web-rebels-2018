import React from "react";
import Link from "gatsby-link";

import Panel from "../components/panel";
import Button from "../components/button";
import SignupForm from "../components/signup-form";
import "./index.scss";

const IndexPage = () => (
  <div className="page">
    <div className="index">

      <section className="col-2">
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
      </section>

      <section className="col-1">
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
      </section>

    </div>
  </div>
);

export default IndexPage;
