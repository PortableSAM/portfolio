import React from "react";
import { Col, Row } from "react-bootstrap";
import "./CSS/Edu.css";

export default class Edu extends React.Component {
  render() {
    return (
      <Row>
        <Col lg={5} sm={"auto"} md={"auto"}>
          <div className=" edu-y">
            <p style={{ fontSize: "20px" }}>
              {this.props.startYear} ~ {this.props.endYear}
            </p>
          </div>
        </Col>
        <Col lg={7} sm={"auto"} md={"auto"}>
          <div className="edu-descript">
            <p style={{ fontSize: "20px" }}>{this.props.schoolName}</p>
            <p style={{ fontSize: "15px" }}>{this.props.Department}</p>
          </div>
        </Col>
      </Row>
    );
  }
}
