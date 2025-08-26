import React from "react";
import { Jumbotron } from "./migration";
import HaofeiYu from "../../assets/img/haofei_yu.jpg"; // Photo not yet available
import JiaxuanYou from "../../assets/img/jiaxuan_you.jpg";

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
                  Jiaxuan You: 1:45 PM - 3:00 PM, Wednesday, Siebel Center for
                  Computer Science | Room 2122
                </li>
                <li>
                  Haofei Yu: 12:00 PM - 1:00 PM, Tuesday and Thursday, Siebel Center for
                  Computer Science | Room 2119B
                </li>
              </ul>
            </li>
            <li>
              <b>Communication</b>: cs512-you@siebelschool.illinois.edu
            </li>
          </ul>
        </div>
      </div>
    </Jumbotron>
  );
};

export default Logistics;
