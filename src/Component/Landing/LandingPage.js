import React from "react";
import "./LandingPage.css";
import { Container, Col, Row } from "react-bootstrap";

export default class LandingPage extends React.Component {
  render() {
    return (
      <>
        <Container>
          <div className="LP">
            <Row>
              <Col></Col>
              <Col lg={8} sm={"auto"}>
                <div className="land ">
                  <span>
                    <h3>Han Saem's Portfolio</h3>
                  </span>
                  <hr style={{ marginTop: "10px", marginBottom: "10px" }} />
                  <div className="skill-icon">
                    <i className="fab fa-html5" />
                    <i className="fab fa-css3-alt" />
                    <i className="fab fa-js-square" />
                    <i className="fab fa-react" />
                  </div>
                </div>
              </Col>
              <Col></Col>
            </Row>
          </div>
        </Container>
      </>
    );
  }
}
