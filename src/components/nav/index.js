import React from "react";
import Link from "gatsby-link";

import "./index.scss";

export default function Nav() {
  return (
    <header className="main-nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link activeClassName="active" to="/speakers">
            Speakers
          </Link>
        </li>
{/*
        <li>
          <Link activeClassName="active" to="/schedule">
            Schedule
          </Link>
        </li>
*/}
        <li>
          <Link activeClassName="active" to="/sponsors">
            Sponsors
          </Link>
        </li>
        <li>
          <Link activeClassName="active" to="/about">
            About WR
          </Link>
        </li>
        <li>
          <Link activeClassName="active" to="/tickets">
            Tickets
          </Link>
        </li>
      </ul>
    </header>
  );
}
