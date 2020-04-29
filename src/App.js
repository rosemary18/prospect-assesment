import "bootstrap/dist/css/bootstrap.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";

import { OverviewPage, OfficesPage } from "./components/pages";

// Actions
import { getCompanies } from "./actions/companyActions";

export class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={OverviewPage} />
        <Route exact path="/company" component={OfficesPage} />
      </Router>
    );
  }
}
const mapStateToProps = (state) => ({
  error: state.error,
  company: state.company,
  companies: state.companies,
});
export default connect(mapStateToProps, getCompanies)(App);
