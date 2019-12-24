import React from "react";
import { About, Projects, Contact } from "../Nav/index";
import LandingPage from "./../Landing/LandingPage";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import "./Layout.css";

export default class Layout extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <div>
              <Link to="/">HanSame's Pofol</Link>
            </div>
            <ul>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li style={{ marginRight: "20px" }}>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>

          <div>
            <Route exact path="/" component={LandingPage} />
            <Route path="/about" component={About} />
            <Route path="/Projects" component={Projects} />
            <Route path="/contact" component={Contact} />
          </div>
        </div>
      </Router>
    );
  }
}
