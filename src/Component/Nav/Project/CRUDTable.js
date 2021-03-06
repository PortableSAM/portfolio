import React from "react";
import { Styles } from "./Clock";

export default function CRUD_Table() {
  return (
    <Styles>
      <div className="project-container">
        <header>
          <h2>CRUD Table</h2>
        </header>
        <main>
          <section>
            <h4>Development environment</h4>
            <ul>
              <li>- OS: Windows</li>
              <li>- IDE: VS Code</li>
              <li>- Language: JavaScript</li>
              <li>- Library: React.JS</li>
              <li>- CSS: Styled-Components</li>
            </ul>
          </section>
          <section>
            <h4>Use Authentication</h4>
            <ul>
              <li>- Firebase Authentication</li>
            </ul>
          </section>
          <section>
            <h4>Use Database</h4>
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
            href="https://project2020-2.web.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-link" />
          </a>
          <a
            href="https://github.com/PortableSAM/Project2020-3"
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
