import React from "react";
import Link from "gatsby-link";

import "./index.scss";

export default function SignupForm() {
  return (
    <div className="signup-form">
      {/* Begin MailChimp Signup Form */}
      <div id="mc_embed_signup">
        <form
          action="https://webrebels.us3.list-manage.com/subscribe/post?u=f515e6756e5ffeffd7a28a60d&id=7d5e649dbe"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          noValidate
        >
          <input
            placeholder="email@example.com"
            type="email"
            defaultValue=""
            name="EMAIL"
            className="required email"
            id="mce-EMAIL"
          />
          <input
            type="submit"
            defaultValue="Sign up for newsletter"
            name="subscribe"
            id="mc-embedded-subscribe"
            className="button"
          />
          <div id="mc_embed_signup_scroll">
            <div className="mc-field-group" />
            <div id="mce-responses" className="clear">
              <div
                className="response"
                id="mce-error-response"
                style={{ display: "none" }}
              />
              <div
                className="response"
                id="mce-success-response"
                style={{ display: "none" }}
              />
            </div>
            {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
            <div
              style={{ position: "absolute", left: "-5000px" }}
              aria-hidden="true"
            >
              <input
                type="text"
                name="b_f515e6756e5ffeffd7a28a60d_7d5e649dbe"
                tabIndex={-1}
                defaultValue
              />
            </div>
            <div className="clear" />
          </div>
        </form>
      </div>
      {/*End mc_embed_signup*/}
    </div>
  );
}
