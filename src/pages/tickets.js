import React from "react";

import Panel from "../components/panel";

const TicketsPage = () => (
  <div className="page">
    <div className="about">
      <section className="col-2">
        <Panel title={<h2>Tickets</h2>} class="box benefits">
          <p>
            Tickets will cost 4500 NOK including MVA. We are planning on having
            two ticket drops.
          </p>
          <ul>
            <li>Tuesday April 24th at 14:00 CEST (sold out)</li>
            <li>Friday April 27th at 17:00 CEST</li>
          </ul>
          <p>
            🎟 We are selling our tickets over at Tito.{" "}
            <a href="https://ti.to/webrebels/2018">Link to tickets</a>.
          </p>
        </Panel>
      </section>
    </div>
  </div>
);

export default TicketsPage;
