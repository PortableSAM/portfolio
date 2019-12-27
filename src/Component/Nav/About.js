import React from "react";
import "./CSS/About.css";
import img from "../Nav/About/Img/img";
import { Edu, Expreience } from "./About/index";
import { Container, Row, Col, Image } from "react-bootstrap";

export default class About extends React.Component {
  render() {
    return (
      <>
        <Container>
          <Row>
            <Col lg={4} sm={"auto"} md={"auto"}>
              <h2 style={{ textAlign: "left", margin: "0", padding: "5px" }}>
                About Me
              </h2>
            </Col>
            <Col></Col>
            <Col></Col>
          </Row>
          <Row>
            <Col lg={1} sm={"auto"} md={"auto"}></Col>
            <Col lg={3} sm={"auto"} md={"auto"} style={{ textAlign: "center" }}>
              <Image
                src={img}
                rounded
                width={150}
                height={150}
                style={{ margin: "5px" }}
              />
              <hr
                style={{
                  borderTop: "1px solid #14a2b9",
                  marginTop: "10px",
                  marginBottom: "10px"
                }}
              />
              <div className="about-text">
                <p>늦게 시작했지만 배우는 것에 늦은 것은 없다.</p>
              </div>
            </Col>
            <Col lg={7} sm={"auto"} md={"auto"}>
              <Row>
                <Col lg={4} sm={"auto"} md={"auto"}>
                  <h4
                    style={{
                      textAlign: "left",
                      margin: "0",
                      padding: "5px",
                      paddingLeft: "10px"
                    }}
                  >
                    Education
                  </h4>
                </Col>
                <Col></Col>
                <Col></Col>
              </Row>
              <Col lg={12} sm={"auto"} md={"auto"}>
                <Edu
                  startYear={2004}
                  endYear={2007}
                  schoolName={"YongSan Technical High School"}
                  Department={"Electron department"}
                />
              </Col>
              <hr style={{ borderTop: "3px solid #6610f2" }} />
              <Row>
                <Col lg={5} sm={"auto"} md={"auto"}>
                  <h4
                    style={{
                      textAlign: "left",
                      margin: "0",
                      padding: "5px",
                      paddingLeft: "10px"
                    }}
                  >
                    Social Expreience
                  </h4>
                </Col>
                <Col></Col>
                <Col></Col>
              </Row>
              <Col lg={12} sm={"auto"} md={"auto"}>
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
              </Col>
            </Col>
            <Col lg={1} sm={"auto"} md={"auto"}></Col>
          </Row>
        </Container>
      </>
    );
  }
}
