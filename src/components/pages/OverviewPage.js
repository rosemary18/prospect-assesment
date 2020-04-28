import React, { Component } from "react";
import { CompanyForm, CompanyDisplay, OfficeForm } from "../reuse-component";

export class OverviewPage extends Component {
  render() {
    return (
      <div className="container mt-4 mb-4 p-2 border rounded">
        <div className="d-flex flex-row ">
          <div className="flex-grow-1">
            <CompanyForm />
          </div>

          <div className="flex-grow-1">
            <OfficeForm />
          </div>
        </div>
        <hr />
        <div className="container">
          <h3 className="text-muted">Companies</h3>
          <div className="d-flex flex-row flex-wrap">
            <CompanyDisplay />
            <CompanyDisplay />
            <CompanyDisplay />
            <CompanyDisplay />
          </div>
        </div>
      </div>
    );
  }
}

export default OverviewPage;
