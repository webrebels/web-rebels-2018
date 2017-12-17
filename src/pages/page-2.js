import React from "react";
import Link from "gatsby-link";

import PanelSvg from "../components/panel-svg";
import Panel from "../components/panel";

const SecondPage = () => (
  <div>
    <PanelSvg title="WR_2018_CALL_FOR_PROPOSALS">
      <p>Submit your proposals before March 1. 2018</p>
      <p>
        <span>The final speaker line-up will be a mix of invited speakers</span>
        <span>– and those accepted from the CfP.</span>
      </p>
      <p>
        <span>We particularly encourage people new to public speaking</span>
        <span>and members of underrepresented groups</span>
        <span>in tech to send in their suggestions.</span>
      </p>
    </PanelSvg>

    <Panel title="WR_2018_CALL_FOR_PROPOSALS">
      <p>Submit your proposals before March 1. 2018</p>
      <p>
        <span>The final speaker line-up will be a mix of invited speakers</span>
        <span>– and those accepted from the CfP.</span>
      </p>
      <p>
        <span>We particularly encourage people new to public speaking</span>
        <span>and members of underrepresented groups</span>
        <span>in tech to send in their suggestions.</span>
      </p>
    </Panel>
  </div>
);

export default SecondPage;
