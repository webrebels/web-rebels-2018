import React from "react";

import Panel from "../components/panel";

const TicketsPage = () => (
  <div className="page">
    <div className="about">
      <section className="col-2">
        <Panel title={<h2>Tickets</h2>} class="box benefits">
          <p>
            Tickets sold for 4500 NOK including MVA. We had three ticket drops. Here is an overview of the ticket drops:
          </p>
          <ul>
            <li><s>Tuesday April 24th at 14:00 CEST</s> (sold out)</li>
            <li><s>Friday April 27th at 17:00 CEST</s> (sold out)</li>
            <li><s>Monday May 7th at 17:00 CEST (last batch)</s></li>
          </ul>
          <p>
            🎟 We were selling our tickets over at Tito.{" "}
            <a href="https://ti.to/webrebels/2018">Link to tickets</a>.
          </p>
        </Panel>
      </section>
    </div>
  </div>
);

export default TicketsPage;
