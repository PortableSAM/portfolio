import React from "react";
import { Jumbotron } from "react-bootstrap";
import "./CWA.css";

function CurrentWthrApp() {
  return (
    <div className="cwa-container">
      <div className="cwa-title">
        <h2>Current Weather App</h2>
        <hr />
      </div>
      <div className="cwa-content">
        <Jumbotron
          style={{
            margin: "auto",
            display: "flex",
            padding: "5px",
            justifyContent: "space-around"
          }}
        >
          <div className="cwa-text">
            <h4>Development environment</h4>
            <ul>
              <li>- OS: Windows</li>
              <li>- IDE: VS Code</li>
              <li>- Language: JavaScript</li>
              <li>- Library: React.JS</li>
            </ul>
          </div>
          <div className="cwa-text">
            <h4>Use Open API</h4>
            <ul>
              <li>- OpenWeatherMap</li>
            </ul>
          </div>
          <div className="cwa-text">
            <h4>Development Platform</h4>
            <ul>
              <li>- Firebase Hosting</li>
            </ul>
          </div>
        </Jumbotron>
        <hr />
        <div className="link-icon">
          <p>
            <a
              href="https://currentweatherapp-b65b2.firebaseapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-link" />
            </a>
          </p>
          <p>
            <a
              href="https://github.com/PortableSAM/CurrentWthrApp"
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