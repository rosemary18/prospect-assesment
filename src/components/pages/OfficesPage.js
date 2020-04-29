import React, { Component } from "react";
import { Link } from "react-router-dom";
import { OfficeDisplay } from "../reuse-component";

export class OfficesPage extends Component {
  render() {
    return (
      <div
        className="container mt-4 mb-4 p-3 border"
        style={{
          borderRadius: 10,
        }}
      >
        <div className="row">
          <div className="col-sm">
            <h3 className="text-muted">Apple Inc.</h3>
            <hr />
            <h6 className="text-dark m-0">Address :</h6>
            <p className="text-muted">sadffsfsdf</p>
            <h6 className="text-dark m-0">Revenue :</h6>
            <p className="text-muted">dsfgdfg</p>
            <div className="row">
              <div className="col-sm-8">
                <h6 className="text-dark m-0">Phone :</h6>
                <p className="text-muted">(098) 098-098</p>
              </div>
              <div className="col-sm-4">
                <Link
                  to="/"
                  style={{ backgroundColor: "#dee2e6" }}
                  className="btn btn-md btn-block"
                >
                  Back to Overview
                </Link>
              </div>
            </div>

            <hr className="mt-0" />
            <h4 className="text-dark">Offices</h4>
            <div className="d-flex flex-row flex-wrap p-0">
              <OfficeDisplay />
              <OfficeDisplay />
              <OfficeDisplay />
              <OfficeDisplay />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OfficesPage;
