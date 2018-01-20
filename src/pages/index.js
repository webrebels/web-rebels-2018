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

        <Panel title={<h1>CALL_FOR_PROPOSALS</h1>}>
          <p>
            <span>Submit your proposals before February 25. 2018</span>
          </p>
          <p>
            <span>
              The final speaker line-up will be a mix of invited speakers
            </span>
            <span>– and those accepted from the CfP.</span>
          </p>
          <p>
            <span>We particularly encourage people new to public speaking</span>
            <span>and members of underrepresented groups</span>
            <span>in tech to send in their suggestions.</span>
          </p>

          <Button to="https://www.papercall.io/webreb2018">Submit CFP</Button>
        </Panel>
      </div>
    </div>
  </div>
);

export default IndexPage;
