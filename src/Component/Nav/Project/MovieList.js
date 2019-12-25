import React from "react";
import { Jumbotron } from "react-bootstrap";
import "./Projects.css";

function CurrentWthrApp() {
  return (
    <div className="p-container">
      <div className="p-title">
        <h2>Movie List</h2>
        <hr />
      </div>
      <div className="p-content">
        <Jumbotron
          style={{
            margin: "auto",
            display: "flex",
            padding: "5px",
            justifyContent: "space-around"
          }}
        >
          <div className="p-text">
            <h4>Development environment</h4>
            <ul>
              <li>- OS: Windows</li>
              <li>- IDE: VS Code</li>
              <li>- Language: JavaScript</li>
              <li>- Library: React.JS</li>
            </ul>
          </div>
          <div className="p-text">
            <h4>Use Open API</h4>
            <ul>
              <li>- Kobis Open API</li>
            </ul>
          </div>
          <div className="p-text">
            <h4>Development Platform</h4>
            <ul>
              <li>- Firebase</li>
            </ul>
          </div>
        </Jumbotron>
        <hr />
        <div className="link-icon">
          <p>
            <a
              href="https://movielistapp-b39ef.firebaseapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-link" />
            </a>
          </p>
          <p>
            <a
              href="https://github.com/PortableSAM/Movie_App"
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
