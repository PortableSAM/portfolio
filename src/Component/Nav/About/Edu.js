import React from "react";
import { Col, Row } from "react-bootstrap";
import "./CSS/Edu.css";

export default class Edu extends React.Component {
  render() {
    return (
      <div className="content">
        <Row>
          <Col sm={4}>
            <div className=" edu-y">
              <p style={{ fontSize: "20px" }}>
                {this.props.startYear} ~ {this.props.endYear}
              </p>
            </div>
          </Col>
          <Col sm={8}>
            <div className="edu-descript">
              <p style={{ fontSize: "20px" }}>{this.props.schoolName}</p>
              <p style={{ fontSize: "15px" }}>{this.props.Department}</p>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
