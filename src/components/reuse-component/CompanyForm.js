import "react-phone-number-input/style.css";
import React, { Component } from "react";
import PhoneInput from "react-phone-number-input";
import { addCompany } from "../../actions/companyActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class CompanyForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      address: "",
      revenue: "",
      phone: "",
      errors: {},
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    const data = {
      name: this.state.name,
      address: this.state.address,
      revenue: this.state.revenue,
      phone: this.state.phone,
    };
    this.props.addCompany(data);
  }
  render() {
    return (
      <div className="container">
        <h3 className="text-muted">Create Company</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="text-muted">
              Name :
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              placeholder="Name"
              value={this.state.name}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="address" className="text-muted">
              Address :
            </label>
            <input
              type="text"
              id="address"
              name="address"
              className="form-control"
              placeholder="Address"
              value={this.state.address}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="revenue" className="text-muted">
              Revenue :
            </label>
            <input
              type="text"
              id="revenue"
              name="revenue"
              className="form-control"
              placeholder="Revenue"
              value={this.state.revenue}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone" className="text-muted">
              Phone No :
            </label>
            <PhoneInput
              className="form-control border-0"
              placeholder="Enter phone number"
              name="phone"
              value={this.state.phone}
              onChange={(value) => this.setState({ phone: value })}
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

CompanyForm.propTypes = {
  addCompany: PropTypes.func.isRequired,
};

export default connect(null, { addCompany })(CompanyForm);
