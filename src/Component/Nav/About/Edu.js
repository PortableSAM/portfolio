import React from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";

//import "./CSS/Edu.css";

export default class Edu extends React.Component {
  render() {
    return (
      <Styles>
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
      </Styles>
    );
  }
}

const Styles = styled.div`
  .edu-y {
    width: 100%;
    text-align: left;
    & p {
      margin: 10px;
      padding: 5px;
    }
  }
  .edu-descript {
    width: 100%;
    text-align: left;
    & p {
      margin: 10px;
      padding: 5px;
    }
  }
`;
