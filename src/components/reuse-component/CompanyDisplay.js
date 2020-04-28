import React, { Component } from "react";

export class CompanyDisplay extends Component {
  render() {
    return (
      <div className="col-sm-6">
        <div
          className="card rounded"
          style={{
            width: "30rem",
            margin: "auto",
            marginBottom: 10,
            marginTop: 10,
          }}
        >
          <div className="card-body">
            <div className="d-flex flex-row align-items-center">
              <h5 className="card-title">Apple Inc</h5>
              <button
                className="btn btn-sm ml-auto p-1"
                onClick={() => alert("Clicked")}
              >
                <h5>&times;</h5>
              </button>
            </div>
            <hr className="mt-0" />
            <div className="card-text">
              <h6>Address :</h6>
              <p className="text-muted">blabla</p>
              <h6>Revenue :</h6>
              <p className="text-muted">blabla</p>
              <h6>Phone No :</h6>
              <p className="text-muted">blabla</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CompanyDisplay;
