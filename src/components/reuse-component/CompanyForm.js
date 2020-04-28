import "react-phone-number-input/style.css";
import React, { Component } from "react";
import PhoneInput from "react-phone-number-input";

export class CompanyForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      phone: "",
    };
  }

  render() {
    return (
      <div className="container">
        <h3 className="text-muted">Create Company</h3>
        <form action="">
          <div className="form-group">
            <label htmlFor="name" className="text-muted">
              Name :
            </label>
            <input
              type="text"
              id="name"
              className="form-control"
              placeholder="Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="address" className="text-muted">
              Address :
            </label>
            <input
              type="text"
              id="address"
              className="form-control"
              placeholder="Address"
            />
          </div>
          <div className="form-group">
            <label htmlFor="revenue" className="text-muted">
              Revenue :
            </label>
            <input
              type="text"
              id="revenue"
              className="form-control"
              placeholder="Revenue"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone" className="text-muted">
              Phone No :
            </label>
            <PhoneInput
              className="form-control border-0"
              placeholder="Enter phone number"
              value={this.state.phone}
              onChange={(phone) => this.setState({ phone })}
            />
          </div>
          <button
            type="submit"
            style={{ backgroundColor: "#dee2e6" }}
            className="btn btn-lg btn-block"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default CompanyForm;
