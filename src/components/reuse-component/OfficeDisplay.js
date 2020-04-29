import React, { Component } from "react";
import { Link } from "react-router-dom";

export class OfficeDisplay extends Component {
  render() {
    return (
      <div className="col-sm-6 p-0">
        <div
          className="card"
          style={{
            width: "30rem",
            margin: "auto",
            marginBottom: 10,
            marginTop: 10,
            borderRadius: 10,
          }}
        >
          <div className="card-body p-2">
            <div className="d-flex flex-row align-items-center p-0">
              <h5 className="card-title m-0 text-muted">UK OFFICE</h5>
              <Link
                className="ml-auto"
                style={{ textDecoration: "none", color: "#000" }}
              >
                <h4>&times;</h4>
              </Link>
            </div>
            <hr className="mt-0" />
            <div className="container">
              <h5 className="mb-0">Location :</h5>
              <p className="text-muted m-0">Lat - 098</p>
              <p className="text-muted mt-0">Long - 098</p>
              <h5 className="mb-0">Office Start Date :</h5>
              <p className="text-muted mt-0">4/4/2000</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OfficeDisplay;
