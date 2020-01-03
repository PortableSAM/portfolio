import React from "react";
import { Jumbotron, Container, Row, Col } from "react-bootstrap";
import "../CSS/Projects.css";

function Clock() {
  return (
    <Container>
      <Row>
        <Col lg={4} md={"auto"} sm={"auto"}>
          <h2>Search Based Weather Info Web App</h2>
        </Col>
        <Col></Col>
        <Col></Col>
      </Row>
      <hr style={{ borderTop: "2px solid #343a40" }} />
      <Jumbotron style={{ marginBottom: "0" }}>
        <Row>
          <Col lg={4} md={"auto"} sm={"auto"}>
            <h4>Development environment</h4>
            <ul>
              <li>- OS: Windows</li>
              <li>- IDE: VS Code</li>
              <li>- Language: JavaScript</li>
              <li>- Library: React.JS</li>
            </ul>
          </Col>
          <Col lg={4} md={"auto"} sm={"auto"}>
            <h4>Use Open API </h4>
            <ul>
              <li>- OpenWeatherMap</li>
            </ul>
          </Col>
          <Col lg={4} md={"auto"} sm={"auto"}>
            <h4>Development Platform</h4>
            <ul>
              <li>- Firebase Hosting</li>
            </ul>
          </Col>
        </Row>
      </Jumbotron>
      <hr style={{ borderTop: "2px solid #343a40" }} />
      <Row>
        <Col></Col>
        <Col lg={8} md={"auto"} sm={"auto"}>
          <p>
            <a
              href="https://search-based-weather-info.web.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-link" />
            </a>
          </p>
          <p>
            <a
              href="https://github.com/PortableSAM/Search-based-Weather-Info"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github-square" />
            </a>
          </p>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default Clock;
