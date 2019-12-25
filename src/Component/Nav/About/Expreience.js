import React from "react";
import "./CSS/Expreience.css";
import { Row, Col } from "react-bootstrap";

export default class Expreience extends React.Component {
  render() {
    return (
      <div className="content">
        <Row>
          <Col sm={4}>
            <div className="ex-y">
              <p style={{ fontSize: "20px" }}>
                {this.props.startYear} ~ {this.props.endYear}
              </p>
            </div>
          </Col>
          <Col sm={8}>
            <div className="ex-descript">
              <p style={{ fontSize: "20px" }}>{this.props.jobName}</p>
              <p style={{ fontSize: "15px" }}>{this.props.description}</p>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
