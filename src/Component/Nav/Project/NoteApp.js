import React from "react";
import { Styles } from "./Clock";
import { Link } from "react-router-dom";

function NoteApp() {
  return (
    <Styles>
      <div className="project-container">
        <header>
          <h2> Note App(with React, FireStore)</h2>
        </header>
        <main>
          <section>
            <h4>Development environment</h4>
            <ul>
              <li>- OS: Windows</li>
              <li>- IDE: VS Code</li>
              <li>- Language: JavaScript</li>
              <li>- Library: React</li>
            </ul>
          </section>
          <section>
            <h4>Use Thirdparty Library </h4>
            <ul>
              <li>- CSS : React Strap</li>
              <li>- React Router Dom</li>
            </ul>
          </section>
          <section>
            <h4>Use Database </h4>
            <ul>
              <li>- Cloud FireStore</li>
            </ul>
          </section>
          <section>
            <h4>Development Platform</h4>
            <ul>
              <li>- Firebase Hosting</li>
            </ul>
          </section>
        </main>
        <footer>
          <a
            href="https://noteapp-7c7ce.web.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-link" />
          </a>

          <a
            href="https://github.com/PortableSAM/NoteApp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github-square" />
          </a>
        </footer>
      </div>
    </Styles>
  );
}

export default NoteApp;
