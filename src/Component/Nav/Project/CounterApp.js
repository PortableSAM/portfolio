import React from "react";
import { Styles } from "./Clock";
import { Link } from "react-router-dom";

export default function Clock() {
  return (
    <Styles>
      <div className="project-container">
        <header>
          <h2> Counter App</h2>
        </header>
        <main>
          <section>
            <h4>Development environment</h4>
            <ul>
              <li>- OS: Windows</li>
              <li>- IDE: VS Code</li>
              <li>- Language: TypeScript</li>
              <li>- Library: React</li>
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
            to="https://counter-app-d0e29.web.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-link" />
          </Link>

          <Link
            to="https://github.com/PortableSAM/Counter-App"
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
