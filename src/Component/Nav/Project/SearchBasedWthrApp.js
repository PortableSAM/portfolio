import React from "react";
import { Styles } from "./Clock";

function SearchBasedWthrApp() {
  return (
    <Styles>
      <div className="project-container">
        <header>
          <h2>Search Based Weather Info Web App</h2>
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
            <h4>Use Open API </h4>
            <ul>
              <li>- OpenWeatherMap</li>
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
            href="https://search-based-weather-info.web.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-link" />
          </a>
          <a
            href="https://github.com/PortableSAM/Search-based-Weather-Info"
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

export default SearchBasedWthrApp;
