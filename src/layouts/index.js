// @flow
import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import "./index.scss";
import imageryUrl from "../graphics/background.png";
import Nav from "../components/nav";

type Props = { children: () => React.Node };
class TemplateWrapper extends Component<Props> {
  render() {
    const { children } = this.props;
    return (
      <div className="template-wrapper">
        <Helmet
          title="Web Rebels 2018"
          meta={[
            {
              name: "description",
              content: "Web Rebels JS conference 2018, Oslo"
            },
            {
              name: "keywords",
              content: "webrebels, conference, javascript, js, olso"
            }
          ]}
        />
        <div className="image-wrapper">
          <img className="imagery" src={imageryUrl} alt="Oslo city scape" />
        </div>
        <Nav />
        <div className="layout-page-content">
          {children()}
        </div>
        <div className="layout-page-sponsors">
          <section className="col-4">
            <a href="https://www.mozilla.org" className="sponsor mozilla"> </a>
            <a href="https://www.sparebank1.no/" className="sponsor sparebank1"> </a>
            <a href="#" className="sponsor"> </a>
            <a href="#" className="sponsor"> </a>

            <a href="#" className="sponsor"> </a>
            <a href="#" className="sponsor"> </a>
            <a href="#" className="sponsor"> </a>
            <a href="#" className="sponsor"> </a>
          </section>
        </div>
      </div>
    );
  }
}

export default TemplateWrapper;
