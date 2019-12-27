import React from "react";
import "./CSS/Expreience.css";
import { Row, Col } from "react-bootstrap";

export default class Expreience extends React.Component {
  render() {
    return (
      <Row>
        <Col lg={5} md={"auto"} sm={"auto"}>
          <div className="ex-y">
            <p style={{ fontSize: "20px" }}>
              {this.props.startYear} ~ {this.props.endYear}
            </p>
          </div>
        </Col>
        <Col lg={7} md={"auto"} sm={"auto"}>
          <div className="ex-descript">
            <p style={{ fontSize: "20px" }}>{this.props.jobName}</p>
            <p style={{ fontSize: "15px" }}>{this.props.description}</p>
          </div>
        </Col>
      </Row>
    );
  }
}
