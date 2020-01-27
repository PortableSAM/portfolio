import React from "react";
import { Styles } from "./Clock";
import { Link } from "react-router-dom";

function Clock() {
  return (
    <Styles>
      <div className="project-container">
        <header>
          <h2>Movie List</h2>
        </header>
        <main>
          <section>
            <h4>Development environment</h4>
            <ul>
              <li>- OS: Windows</li>
              <li>- IDE: VS Code</li>
              <li>- Language: JavaScript</li>
              <li>- Library: React.JS</li>
            </ul>
          </section>
          <section>
            <h4>Use Thrid Party Library</h4>
            <ul>
              <li>- Moment.js</li>
            </ul>
          </section>
          <section>
            <h4>Use Open API</h4>
            <ul>
              <li>- Kobis Open API</li>
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
          <Link
            to="https://movielistapp-b39ef.firebaseapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-link" />
          </Link>
          <Link
            to="https://github.com/PortableSAM/Movie_App"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github-square" />
          </Link>
        </footer>
      </div>
    </Styles>
  );
}

export default Clock;
