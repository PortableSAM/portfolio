import React from "react";
//import "./CSS/About.css";
import img from "../Nav/About/Img/img";
import { Edu, Expreience } from "./About/index";
import { Container, Row, Col } from "react-bootstrap";

export default class About extends React.Component {
  render() {
    return (
      <Container>
        <div className="a-container">
          <h2>About Me</h2>

          <Row>
            <Col sm={4}>
              <div className="profile">
                <div className="my-img">
                  <img src={img} alt="img" />
                </div>
                <hr style={{ borderTop: "3px solid #076585" }} />
                <div className="my-text">
                  <p>늦게 시작했지만 배움에는 늦음이 없다.</p>
                </div>
              </div>
            </Col>
            <Col sm={8}>
              <div className="edu-contents">
                <h4>Education</h4>
                <Edu
                  startYear={2004}
                  endYear={2007}
                  schoolName={"YongSan Technical High School"}
                  Department={"Electron department"}
                />
                <hr
                  style={{ borderTop: "3px dottod #076585", width: "100%" }}
                />
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
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}

/*export default class About extends React.Component {
  render() {
    return (
      <div className="content">
        <div className="about">
          <div className="about-row">
            <div>
              <div className="my-img">
                <img src={img} alt="img" />
              </div>
              <hr style={{ borderTop: "3px solid #076585" }} />
              <div className="my-text">
                <p>늦게 시작했지만 배움에는 늦음이 없다.</p>
              </div>
            </div>
            <div>
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
*/
