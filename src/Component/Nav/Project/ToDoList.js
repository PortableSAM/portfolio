import React from "react";
import { Styles } from "./Clock";
import { Link } from "react-router-dom";

function TodoList() {
  return (
    <Styles>
      <div className="project-container">
        <header>
          <h2>To Do List</h2>
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
            <h4>Use Database</h4>
            <ul>
              <li>- Firebase RealTime Database</li>
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
            href="https://todolist-df22d.firebaseapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-link" />
          </a>
          <a
            href="https://github.com/PortableSAM/ToDoList-React"
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

export default TodoList;
