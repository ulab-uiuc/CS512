import React from "react";
import { Jumbotron } from "./migration";
import JiaxuanYou from "../../assets/img/jiaxuan_you.jpg";
import HaofeiYu from "../../assets/img/haofei_yu.jpg";

const Instructors = () => {
  return (
    <Jumbotron id="instructors" className="m-0 instructors-section">
      <h2 className="section-heading text-center">
        Instructors
      </h2>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-3 col-md-6 text-center mb-4">
            <img
              className="instructor-photo"
              src={JiaxuanYou}
              alt="Jiaxuan You"
              width={180}
              height={180}
            />
            <p className="instructor-name">
              <a href="https://cs.stanford.edu/people/jiaxuan/">Jiaxuan You</a>
            </p>
            <p className="instructor-role">Instructor</p>
          </div>
          <div className="col-lg-3 col-md-6 text-center mb-4">
            <img
              className="instructor-photo"
              src={HaofeiYu}
              alt="Haofei Yu"
              width={180}
              height={180}
            />
            <p className="instructor-name">
              <a href="https://haofeiyu.me/">Haofei Yu</a>
            </p>
            <p className="instructor-role">TA</p>
          </div>
        </div>
      </div>
    </Jumbotron>
  );
};

export default Instructors;
