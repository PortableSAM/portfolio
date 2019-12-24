import React from "react";
import { About, Contact } from "../Nav/index";
import LandingPage from "./../Landing/LandingPage";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./Layout.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

export default class Layout extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand>
              <Link className="navbar-brand" to="/">
                Han Saem's Pofol
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Link className="nav-link" to="/about">
                  About
                </Link>
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
                <NavDropdown title="Project" id="collasible-nav-dropdown">
                  <div className="drop-menu">
                    <Link to="/cwa">Current Weather App</Link>
                    <NavDropdown.Divider />
                    <Link to="/clock">Clock</Link>
                    <NavDropdown.Divider />
                    <Link to="/movielist">Movie List</Link>
                  </div>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/cwa" component={CurrentWthrApp} />
            <Route path="/clock" component={Clock} />
            <Route path="/movielist" component={MovieList} />
          </Switch>
        </div>
      </Router>
    );
  }
}
