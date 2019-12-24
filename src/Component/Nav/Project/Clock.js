import React from "react";
import { Jumbotron } from "react-bootstrap";
import "./Clock.css";

function CurrentWthrApp() {
  return (
    <div className="clock-container">
      <div className="clock-title">
        <h2>Clock App</h2>
        <hr />
      </div>
      <div className="clock-content">
        <Jumbotron
          style={{
            margin: "auto",
            display: "flex",
            padding: "5px",
            justifyContent: "space-around"
          }}
        >
          <div className="clock-text">
            <h4>Development environment</h4>
            <ul>
              <li>- OS: Windows</li>
              <li>- IDE: VS Code</li>
              <li>- Language: JavaScript</li>
              <li>- Library: React.JS</li>
            </ul>
          </div>
          <div className="clock-text">
            <h4>Use Third Party Library</h4>
            <ul>
              <li>- Moment.JS</li>
            </ul>
          </div>
          <div className="clock-text">
            <h4>Development Platform</h4>
            <ul>
              <li>- gh-pages Hosting</li>
            </ul>
          </div>
        </Jumbotron>
        <hr />
        <div className="link-icon">
          <p>
            <a
              href="https://portablesam.github.io/Clock-App/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-link" />
            </a>
          </p>
          <p>
            <a
              href="https://github.com/PortableSAM/Clock-App"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github-square" />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CurrentWthrApp;
