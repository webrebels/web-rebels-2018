import React from "react";
import Link from "gatsby-link";

import "./index.scss";

export default function Button(props) {
  const { children, to } = props;
  if (to != null) {
    if (/https?:\/\//.test(to)) {
      return (
        <a href={to} className="button">
          {children}
        </a>
      );
    }
    return (
      <Link to={to} className="button">
        {children}
      </Link>
    );
  }
  return <button className="button">{children}</button>;
}
