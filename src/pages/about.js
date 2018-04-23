import React from "react";

import Panel from "../components/panel";
import "./about.scss";

import venueUrl from "../graphics/venue.jpg";
import mathallenUrl from "../graphics/mathallen-small.jpg";

const AboutPage = () => (
  <div className="page">
    <div className="about">

      <section className="col-2">
        <Panel title={<h2>Location</h2>} class="box benefits">
          <p>
            Where is the venue and <br /> how do i get there?
          </p>
          <h4>Welcome to Grünerløkka and Vulkan</h4>
          <p>
            Everything related to the conference happens at Vulkan, Grünerløkka,
            within a 100m radius of the venue: the conference, lunch and the
            social events.
          </p>
          <img src={venueUrl} title="Dansens Hus (House of Dance)" />
        </Panel>

        <Panel title={<h1>Venue</h1>}>
          <p>
            Welcome to “Dansens hus” which is the National Stage for Dance.
            Located right next door to Mathallen and with it's larger capacity
            it is an ideal location for our conference for our 5th edition.
          </p>
          <h5>Lunch at Mathallen</h5>
          <p>
            Right next door from Dansens hus is Mathallen which is Oslo’s first
            gourmet food market and located about 20 meters from the venue.
            There is a wide selection of gourmet food stores, restaurants,
            excellent coffee and beer shops. All food served at the conference
            will be provided from these establishments.
          </p>
          <img src={mathallenUrl} />

          <h5>Accessibility</h5>
          <p>
            The venue is wheelchair accessible. The entrance is on the ground
            floor. If you have any questions about practicalities – or if there
            is anything we can do to make your attendance possible, please do
            not hesitate to{" "}
            <a href="mailto:boyhowdy[ replace this bracket with a @]webrebels.org">
              shoot us an email
            </a>.
          </p>
        </Panel>

        <Panel title={<h2>Policies</h2>} class="box benefits">
          <p>
            OUR POLICIES <br />
            If you wonder what our policies are on topics such as sponsors,
            speaker selection or ticket refund please consult our policies for
            details.
          </p>
          <p>
            TICKET REFUND POLICY<br />
            We have a refund policy for tickets which is{" "}
            <a href="https://github.com/webrebels/rebeladmin/wiki/TicketRefunds">
              described on our wiki.
            </a>
            If you have any questions about this, please do not hesitate to
            contact us.
          </p>
        </Panel>

        <Panel title={<h1>About</h1>}>
          <p>
            Web Rebels is all about the <br /> the community and good times.
          </p>
          <h4>A JavaScript Conference</h4>
          <p>
            The Web Rebels conference is a JavaScript conference and we are
            proud members of{" "}
            <a href="http://jsconf.com/">the JSConf family of events</a>. We are
            a conference for developers who love building applications and
            services using web technology.
          </p>
          <h4>For the community, not for profit</h4>

          <p>
            We are a{" "}
            <a href="http://w2.brreg.no/enhet/sok/detalj.jsp?orgnr=997686659">
              registered not-for-profit organization
            </a>
            that is run by unpaid volunteers. If we make any profit from the
            conference we give 30% back to community groups throughout the
            Nordic region. Any questions you might have:{" "}
            <a
              href="mailto:kontor[ replace this bracket with a @
                      ]webrebels.org"
            >
              shoot us an email
            </a>
            or find us on <a href="http://twitter.com/web_rebels/">Twitter</a>.
          </p>
          <p>
            We invite <a href="#talks">16 speakers</a> from all over the world,
            some of them are picked from our Call For Papers and some are picked
            the organizers.
          </p>
          <h4 id="coc">Code of Conduct</h4>
          <p>
            We want these couple of days to be truly enjoyable for everyone.
            Attendees, speakers, sponsors and volunteers must all respect the{" "}
            <a href="http://jsconf.com/codeofconduct.html">
              JSConf Code of Conduct
            </a>.
            <br />
            If anything happens that we should know about, contact a member of
            the crew.
          </p>
          <h4>WEB REBEL CREW</h4>
          <p>
            The volunteers working to bring you the 6th Web Rebels Conference
            are:
          </p>
          <ol>
            <li>
              Agneta Nilsson (<a href="https://twitter.com/agneta_nilsson">
                @agneta_nilsson
              </a>)
            </li>
            <li>
              Alexandra Leisse (<a href="https://github.com/troubalex">
                @troubalex
              </a>)
            </li>
            <li>
              Anders Olsen Sandvik (<a href="https://github.com/Andersos">
                @Andersos
              </a>)
            </li>
            <li>
              Bodil Stokke (<a href="https://github.com/bodil">@bodil</a>)
            </li>
            <li>
              Max Brosnahan (<a href="https://github.com/gingermusketeer">
                @gingermusketeer)
              </a>
            </li>
            <li>
              Richard Walker (<a href="https://github.com/digitalsadhu">
                @digitalsadhu
              </a>)
            </li>
            <li>
              Trygve Lie (<a href="https://github.com/trygve-lie">
                @trygve-lie
              </a>)
            </li>
          </ol>
        </Panel>

        <Panel title={<h2>previous_web_rebel_confs</h2>} class="box gold">
          <p>
            Below are links to previous conference websites. If you're looking
            for the videos they're all in our{" "}
            <a href="https://www.youtube.com/channel/UCM9cTs_C0PmTlHXTNrqTpnw">
              YouTube channel.
            </a>
          </p>
          <ol>
            <li>
              <a href="http://2016.webrebels.org/">2016 edition</a>
            </li>
            <li>
              <a href="http://2015.webrebels.org/">2015 edition</a>
            </li>
            <li>
              <a href="http://2014.webrebels.org/">2014 edition</a>
            </li>
            <li>
              <a href="http://2013.webrebels.org/">2013 edition</a>
            </li>
            <li>
              <a href="http://2012.webrebels.org/">2012 edition</a>
            </li>
          </ol>
        </Panel>

        <Panel title={<h2>SPEAKERS</h2>} class="box bronze">
          <p>For invited speakers we cover:</p>
          <ul>
            <li>All travel to and from the conference hotel / venue</li>
            <li>Stay at the conference hotel during the conference</li>
            <li>
              Admission to the conference and all conference related activities
            </li>
            <li>Speakers dinner and all meals during the conference</li>
            <li>
              All beverages on the pre conference party and conference party
            </li>
            <li>
              A public transport card giving full access to all public transport
              in Oslo
            </li>
          </ul>
          <p>
            Upon invitation to speak at Web Rebels, each speaker is informed
            about the above. Though, each speaker are also informed that if the
            speakers employee would consider covering, in full or partly, the
            speakers travel cost we are more than happy to work out a
            sponsorship deal and what is saved upon such a deal are put back
            into making the conference better.
          </p>
        </Panel>
      </section>

    </div>
  </div>
);

export default AboutPage;
