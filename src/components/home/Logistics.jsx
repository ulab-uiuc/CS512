import React from "react";
import { Jumbotron } from "./migration";

const Logistics = () => {
  return (
    <Jumbotron id="logistics" className="m-0 logistics-section">
      <h2 className="section-heading text-center">
        Logistics
      </h2>
      <div className="container row">
        <div className="logistics-list">
          <ul>
            <li>
              <b>Times</b>: 02:00 PM - 03:15 PM, Wednesday and Friday,
              08/25/2025 - 12/10/2025
            </li>
            <li>
              <b>Locations</b>: Urbana-Champaign Campus | Digital Computer Laboratory | Room 1320
            </li>
            <li>
              <b>Course Materials</b>: Slides will be posted here before
              classes.
            </li>
            <li>
              <b>Office Hours</b>: We encourage you to reserve (link visible on
              Canvas) your time slots if you need much time (such as 10
              minutes). While walk-in is welcomed, you may need to wait for
              others who reserve the time slot to finish.
              <ul>
                <li>
                  Jiaxuan You: 3:30 PM - 5:00 PM, Wednesday, Siebel Center for
                  Computer Science | Room 2122
                </li>
                <li>
                  Haofei Yu: 12:45 PM - 1:45 PM, Tuesday and Thursday, Siebel Center for
                  Computer Science | Room 2119B
                </li>
                <li>
                  Pengrui Han: 12:30 PM - 2:00 PM, Wednesday, Siebel Center for
                  Computer Science | Room 2119B
                </li>
              </ul>
            </li>
            <li>
              <b>Course Email</b>: cs512-you@siebelschool.illinois.edu
            </li>
            <li>
              <b>Join Course Slack (Highly Encouraged)</b>: <a href="https://join.slack.com/t/uiuc-cs512-2025fall/shared_invite/zt-3c75rpi90-ts~eCgHb6m5CeWJpn80Whg" target="_blank" rel="noopener noreferrer">here</a>
            </li>
          </ul>
        </div>
      </div>
    </Jumbotron>
  );
};

export default Logistics;
