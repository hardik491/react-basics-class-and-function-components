import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Company from "./Company";
import Employee from "./Employee";

import "./styles.css";

class Routes extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Router>
          <div className="navbar">
            <Link to="/company" className="nav-link">Company</Link>
            <Link to="/employee" className="nav-link">Employee</Link>
          </div>
          <Switch>
            <Route exact path="/company" component={Company} />
            <Route exact path="/employee" component={Employee} />
          </Switch>
        </Router>
      </>
    )
  }
}

export default Routes;