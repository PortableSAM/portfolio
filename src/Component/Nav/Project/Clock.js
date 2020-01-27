import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export function Clock() {
  return (
    <Styles>
      <div className="project-container">
        <header>
          <h2> Clock App</h2>
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
            <h4>Use Third Party Library</h4>
            <ul>
              <li>- Moment.JS</li>
            </ul>
          </section>
          <section>
            <h4>Development Platform</h4>
            <ul>
              <li>- gh-pages Hosting</li>
            </ul>
          </section>
        </main>
        <footer>
          <a
            href="https://portablesam.github.io/Clock-App/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-link" />
          </a>
          <a
            href="https://github.com/PortableSAM/Clock-App"
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
export const Styles = styled.div`
  display: flex;
  justify-content: center;
  .project-container {
    margin-top: 100px;
    padding: 10px;
    width: 850px;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    background-color: #d4d7ff;
    @media (max-width: 450px) {
      margin-top: 50px;
      width: 390px;
    }
    & h2,
    header {
      display: flex;
      margin: 0;
      margin-bottom: 5px;
      padding: 5px;
    }
    & main {
      margin: 10px 0;
      padding: 5px 10px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      background-color: #ccf7af5c;
      border-radius: 5px;
      & ul {
        list-style: none;
        text-align: left;
      }
    }
    & footer {
      padding: 10px;
      display: flex;
      justify-content: space-around;
      & i {
        font-size: 2.5rem;
        color: gray;
        &:hover {
          color: #e83e8c;
        }
      }
    }
  }
`;
