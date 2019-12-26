import React from "react";
import { Jumbotron } from "react-bootstrap";
import "./Projects.css";

function CurrentWthrApp() {
  return (
    <div className="p-container">
      <div className="p-title">
        <h2>To Do List(with React and Firebase</h2>
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
            <h4>Use Database</h4>
            <ul>
              <li>- Firebase RealTime Database</li>
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
              href="https://todolist-df22d.firebaseapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-link" />
            </a>
          </p>
          <p>
            <a
              href="https://github.com/PortableSAM/ToDoList-React"
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
