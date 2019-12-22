import React from "react";
import { About, Projects, Contact } from "../Nav/index";
import LandingPage from "./../Landing/LandingPage";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

export default class Layout extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <div className="nav-wrapper deep-purple lighten-4">
              <div
                className="brand-logo"
                style={{ marginLeft: "auto", paddingLeft: "1em" }}
              >
                <Link to="/">HanSame's Pofol</Link>
              </div>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
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
            </div>
          </nav>
          <div className="container">
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
