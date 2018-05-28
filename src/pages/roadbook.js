import React from "react";
import Link from "gatsby-link";

import Box from "../components/box";
import Panel from "../components/panel";
import Button from "../components/button";
import "./roadbook.scss";

import trygveUrl from "../graphics/organisers/org_trygve.jpg";
import alexandraUrl from "../graphics/organisers/alexandra.jpg";
import andersUrl from "../graphics/organisers/anders.jpg";

const RoadbookPage = () => (
  <div className="page">
    <div className="roadbook">
      <section className="col-2">
        <Panel title={<h1>Roadbook</h1>}>
          <p>
            This is the speaker's roadbook. It contains all the important
            information you as a speaker might want to know before, during and
            after your stay at Web Rebels 2018. Please bookmark this page.
          </p>
        </Panel>
      </section>
      <section className="col-2">
        <Panel title={<h2>Contact_information</h2>}>
          <p>
            <a href="#trygve">Trygve Lie</a> is your speaker contact during the
            whole conference. If you have any questions or problems please talk
            to him. You can also contact any of the other organizers at any time
            during your stay.
          </p>
          <p>
            All organizers can be reached at{" "}
            <a href="mailto:kontor@webrebels.org">kontor@webrebels.org</a>.
          </p>
        </Panel>
        <Panel title={<h2>Organizer_info</h2>}>
          <p>The Web Rebels organizers are:</p>
          <a name="trygve" />
          <div className="organizer">
            <img src={trygveUrl} />
            <h3>Trygve Lie</h3>
            <p>
              Mobile: +47 95 25 22 48 - Mail:{" "}
              <a href="mailto:post@trygve-lie.com">post@trygve-lie.com</a> -
              Twitter: <a href="https://twitter.com/trygve_lie">@trygve_lie</a>
            </p>
          </div>
          <a name="anders" />
          <div className="organizer">
            <img
              src={andersUrl}
              height={140}
              width={140}
              alt="Picture of Anders"
            />
            <h3>Anders Olsen Sandvik</h3>
            <p>
              Mobile: <a href="tel:+4791824583">+47 91 82 45 83</a> - Mail:{" "}
              <a href="mailto:webrebels@andersos.net">webrebels@andersos.net</a>{" "}
              - Twitter: <a href="https://twitter.com/Andersos">@Andersos</a>
            </p>
          </div>
          <a name="alexandra" />
          <div className="organizer">
            <img src={alexandraUrl} />
            <h3>Alexandra Leisse</h3>
            <p>
              Mobile: <a href="tel:+4799271036">+47 99 27 10 36</a> - Mail:{" "}
              <a href="mailto:troubalex@gmail.com">troubalex@gmail.com</a> -
              Twitter: <a href="https://twitter.com/troubalex">@troubalex</a>
            </p>
          </div>
        </Panel>
      </section>
      <section className="col-2">
        <Panel title={<h2>Travel to and from the airport</h2>}>
          <p>
            If you are flying into Oslo you will arrive at and depart from{" "}
            <a href="http://www.osl.no/en/osl">Oslo Airport Gardermoen</a>{" "}
            (OSL). Between the airport and Oslo Central Station (nicknamed Oslo
            S) there is a high speed airport shuttle, named Flytoget, running
            every 10 minute. The travel time is ~20 minutes. Departures can be{" "}
            <a href="http://www.flytoget.no/eng/">checked here</a>.
          </p>
          <p>
            If you did not receive airport shuttle tickets before departure,
            please purchase one (ticket machines take credit cards) and give it
            to your speaker contact, <a href="#trygve">Trygve Lie</a>, at any
            time during the conference and we will refund it in cash and give
            you a ticket for the return.
          </p>
          <p>
            If your travel is delayed or if you have any problems during your
            travel, please let us know so we can assist you as good as possible.
          </p>
        </Panel>

        <Panel title={<h2>The conference hotel</h2>}>
          <p>
            Your hotel is the{" "}
            <a href="http://www.scandichotels.com/Hotels/Countries/Norway/Oslo/Hotels/Vulkan/">
              Scandic Vulcan Hotel
            </a>.
          </p>
          <p>
            The address of the hotel is: Maridalsveien 13 A, 0175 Oslo and the
            phone number of the hotel is: +47 21 05 71 00.
          </p>
          <p>Your room is booked in your name.</p>
        </Panel>
      </section>
      <section className="col-2">
        <Panel title={<h2>Getting to the hotel</h2>}>
          <p>
            It is possible to walk to the hotel from Oslo Central Station. It is
            about a 20 minute walk.{" "}
            <a href="http://goo.gl/maps/KGEBq">
              This is the best and fastest walking route
            </a>.
          </p>
          <p>
            The best way to get to the hotel is by tram and then a small walk.
            From Oslo Central Station you can take tram 11, 12 and 13 eastbound
            to Schous Plass (four stops from Oslo Central Station). At Schous
            Plass you can walk{" "}
            <a href="http://goo.gl/maps/h78NN">this short route to the hotel</a>.
          </p>
        </Panel>

        <Panel title={<h2>Getting around in Oslo</h2>}>
          <p>
            Most of you will receive a public transport pass before you depart
            for Oslo. If you have not received one before departure, you will
            receive one when you check into the hotel. If there is not one for
            you at the hotel, please contact <a href="#trygve">Trygve Lie</a>{" "}
            and he will give you one.
          </p>
          <p>
            The public transport pass is valid for 7 days from the day it's
            first validated. It is valid for all public busses, trams, subways
            and boats to the islands in the Oslo fjord and some local trains.
            You should validate the card each time you use the public transport
            system. One can validate the card on board busses, trams and boats.
            On subways and trains one need to validate the card before entering.
          </p>
          <p>
            Timetables, network maps and all other information you should need
            about public transport in Oslo can be found{" "}
            <a href="https://ruter.no/en/">here</a>.
          </p>
        </Panel>
      </section>
      <section className="col-2">
        <Panel title={<h2>Speaker dinner</h2>}>
          <p>
            At 18:00 on the 31st of May there will be a speaker dinner.
            Organizers will be in the loby of the hotel at 17:45 until 18:00 so
            you can join us there and we walk to the restaurant in a group.
          </p>
          <p>
            If you have a special diet (vegan, vegetarian, allergies, etc.)
            please let us know in advance and we will arrange food which suite
            your diet.
          </p>
          <p>
            After the speaker dinner there will be a social meet and greet where
            attendees can meet-up and exchange their ticket to a pass etc. This
            will be at the V Bar og Bistro which is the bar on the ground floor
            of the conference hotel.
          </p>
        </Panel>
        <Panel title={<h2>The venue</h2>}>
          <p>
            The venue is a dance performance venue named{" "}
            <a href="http://www.dansenshus.com/?lang=en">Dansens Hus</a> and is
            ~30 meters from the conference hotel.
          </p>
          <p>
            There will be a section of medium sized tables up front and chairs
            in an auditorium setting behind. The speaker will be at the same
            level as the ground floor. There is no dedicated speaker area at the
            venue. For the speaker there will be a small round table in standing
            height and access to fresh drinking water.
          </p>
        </Panel>
      </section>
      <section className="col-2">
        <Panel title={<h2>Technical</h2>}>
          <p>
            The projector is a full HD 1080P projector with a 1920x1080
            resolution. On stage there will be HDMI and VGA cable to connect to
            the projector. If your laptop needs a bridge to connect to HDMI or
            VGA, please bring one.
          </p>
          <p>
            There will be a sound engineer controlling all sound from the stage
            and you will be given a small wireless headset microphone so your
            hands are free. If your presentation requires sound, please let us
            know before the conference starts so a cable to connect to the PA
            can be provided for you.
          </p>
          <p>
            On stage there is also a dedicated Internet connection which will
            not interfere with the connection used by the attendees. This
            connection can be used if you need a guaranteed connection to
            Internet.
          </p>
          <p>
            Norway use{" "}
            <a href="http://www.world-power-plug.com/power-plug/Norway">
              Type F
            </a>{" "}
            power outlets. If your laptop has another type, please bring a
            converter.
          </p>
        </Panel>

        <Panel title={<h2>Your talk</h2>}>
          <p>
            Please make yourself familiar with the{" "}
            <a href="/schedule/">schedule</a> and the time for your talk. Please
            be by the stage about 15 minutes before it is your turn to enter the
            stage. There is a longer break after every second talk. Your speaker
            slot is 30 to 35 minutes.
          </p>
          <p>
            We have a dedicated MC. We encourage attendees to ask questions on
            Twitter during each talk. Based on these questions and MC's super
            powers of knowledge, you and the MC will have a QA session about
            your talk. The QA session will be held in a seated area on stage and
            will last between 5 and 10 minutes. In other words there will not be
            any direct questions from the audience. The MC of 2016 is Max Ogden.
          </p>
          <p>We also encourage you to put your talk online after your talk.</p>
          <p>
            Please note that everyone taking part in the Web Rebels Conference
            must abide by the{" "}
            <a href="http://jsconf.com/codeofconduct.html">
              JSConf Code of Conduct
            </a>.
          </p>
        </Panel>
      </section>
      <section className="col-2">
        <Panel title={<h2>Filming and streaming</h2>}>
          <p>
            Your talk will be professionally filmed and published on{" "}
            <a href="https://www.youtube.com/channel/UCM9cTs_C0PmTlHXTNrqTpnw">
              our video channel at Youtube
            </a>{" "}
            as fast as possible after the conference. All videos published will
            be published under a{" "}
            <a href="http://creativecommons.org/licenses/by-nc-sa/3.0/">
              CC BY-NC-SA 3.0 licence
            </a>.
          </p>
          <p>
            We will also stream all talks live in full HD. Information about
            that the conference will be streamed will be published the day
            before the conference.
          </p>
          <p>
            If you do not want your talk to be filmed, published or streamed,
            please let us know up front.
          </p>
        </Panel>

        <Panel title={<h2>Official hashtag</h2>}>
          <p>
            We feel deeply honored if you mention us in social media. If you do,
            our official hashtag is: <strong>#webrebels</strong>
          </p>
        </Panel>
      </section>
    </div>
  </div>
);

export default RoadbookPage;
