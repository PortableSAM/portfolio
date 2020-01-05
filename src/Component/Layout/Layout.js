import React from "react";
import { About, Contact } from "../Nav/index";
import {
  CurrentWthrApp,
  Clock,
  MovieList,
  ToDoList,
  SBWthrApp,
  CounterApp
} from "../Nav/Project/index";
import LandingPage from "./../Landing/LandingPage";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./Layout.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

export default class Layout extends React.Component {
  render() {
    return (
      <Router>
        <div style={{ textAlign: "-webkit-center" }}>
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
                  <Link to="/cwa">Current Weather App</Link>
                  <NavDropdown.Divider />
                  <Link to="/clock">Clock</Link>
                  <NavDropdown.Divider />
                  <Link to="/movielist">Movie List</Link>
                  <NavDropdown.Divider />
                  <Link to="/todolist">To Do List</Link>
                  <NavDropdown.Divider />
                  <Link to="/SBWthrApp">Search Based Weather Info Web App</Link>
                  <NavDropdown.Divider />
                  <Link to="/counterApp">Counter App(TypeScript)</Link>
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
            <Route path="/todolist" component={ToDoList} />
            <Route path="/SBWthrApp" component={SBWthrApp} />
            <Route path="/counterApp" component={CounterApp} />
          </Switch>
        </div>
      </Router>
    );
  }
}
