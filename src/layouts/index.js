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
  componentDidMount() {
    setTimeout(() => {
      const id = window.location.hash.slice(1);
      if (id) {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView();
      }
    });
  }
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
            <a href="http://jobbsb1.no/" className="sponsor sparebank1"> </a>
            <a href="https://www.acando.no" className="sponsor acando"> </a>
            <a href="https://www.webstep.no" className="sponsor webstep"> </a>

            <a href="https://finn.no" className="finn sponsor"> </a>
            <a href="https://www.microsoft.com" className="microsoft sponsor"> </a>
            <a href="https://vivaldi.com" className="vivaldi sponsor"> </a>
            <div className="sponsor"> </div>
          </section>
        </div>
      </div>
    );
  }
}

export default TemplateWrapper;
