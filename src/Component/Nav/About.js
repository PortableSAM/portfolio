import React from "react";
import "./CSS/About.css";
import img from "../Nav/About/Img/img";
import { Edu, Expreience } from "./About/index";
export default class About extends React.Component {
  render() {
    return (
      <div className="content">
        <div className="card-panel deep-purple lighten-4 z-depth-3 about">
          <div className="row about-row">
            <div className="col s4">
              <div className="my-img">
                <img className="responsive-img" src={img} alt="img" />
              </div>
              <hr style={{ borderTop: "3px solid #076585" }} />
              <div className="my-text">
                <p>늦게 시작했지만 배움에는 늦음이 없다.</p>
              </div>
            </div>
            <div className="col s8">
              <div className="edu-contents">
                <h4>Education</h4>
                <Edu
                  startYear={2004}
                  endYear={2007}
                  schoolName={"YongSan Technical High School"}
                  Department={"Electron department"}
                />
              </div>
              <hr style={{ borderTop: "3px dottod #076585" }} />
              <div className="se-contents">
                <h4>Social Experience</h4>
                <Expreience
                  startYear={2018}
                  endYear={2019}
                  jobName={"jin-heung Technology"}
                  description={
                    "Gas scrubber Maintenance and Vacuum pump Maintenance"
                  }
                />
                <Expreience
                  startYear={2017.04}
                  endYear={2017.12}
                  jobName={"Dajin Digital Solution"}
                  description={"Office Complex Maintenance Printer Repair"}
                />
                <Expreience
                  startYear={2009}
                  endYear={2016}
                  jobName={"Republic of Korea, Army"}
                  description={"Army Field Artillery, Maintenance Team"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
