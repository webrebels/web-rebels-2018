// @flow
import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import "./index.scss";
import imageryUrl from "../graphics/imagery.png";

type Props = { children: () => React.Node };
class TemplateWrapper extends Component<Props, { marginTop: number }> {
  state = { marginTop: 100 };
  image: ?HTMLImageElement;
  componentDidMount() {
    window.onresize = this.setMargin;
  }

  imageRef = (element: HTMLElement) => {
    this.image = element;
    element.onload = this.setMargin;
  };

  setMargin = () => {
    if (!this.image) return;
    this.setState({ marginTop: this.image.clientHeight * 0.7 });
  };

  render() {
    const { children } = this.props;
    const { marginTop } = this.state;
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
          <img
            className="imagery"
            src={imageryUrl}
            alt="Oslo city scape"
            ref={this.imageRef}
          />
        </div>
        <div className="layout-page-content" style={{ marginTop }}>
          {children()}
        </div>
      </div>
    );
  }
}

export default TemplateWrapper;
