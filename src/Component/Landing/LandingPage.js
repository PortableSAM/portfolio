import React from "react";
import "./LandingPage.css";

export default class LandingPage extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="card-panel z-depth-3 land">
          <span>
            <h3 className="teal-text">Han Saem's Portfolio</h3>
          </span>
          <hr />
          <div className="skill-icon">
            <i className="fab fa-html5" style={{ fontSize: "4em" }} />
            <i className="fab fa-css3-alt" style={{ fontSize: "4em" }} />
            <i className="fab fa-js-square" style={{ fontSize: "4em" }} />
          </div>
        </div>
      </div>
    );
  }
}
