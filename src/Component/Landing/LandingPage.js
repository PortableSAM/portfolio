import React from "react";
import "./LandingPage.css";
import { Container } from "react-bootstrap";

export default class LandingPage extends React.Component {
  render() {
    return (
      <div className="land-body">
        <Container>
          <div className="land">
            <span>
              <h3>Han Saem's Portfolio</h3>
            </span>
            <hr style={{ marginTop: "20px", marginBottom: "20px" }} />
            <div className="skill-icon">
              <i className="fab fa-html5" style={{ fontSize: "4em" }} />
              <i className="fab fa-css3-alt" style={{ fontSize: "4em" }} />
              <i className="fab fa-js-square" style={{ fontSize: "4em" }} />
              <i className="fab fa-react" style={{ fontSize: "4em" }} />
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
