import React, { Component } from "react";
import { connect } from "react-redux";
import { addOffice } from "../../actions/officeActions";
import PropTypes from "prop-types";
export class OfficeForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      latitude: "",
      longitude: "",
      office_start_date: Date.now(),
      company: "",
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
      latitude: this.state.latitude,
      longitude: this.state.longitude,
      office_start_date: this.state.office_start_date,
      company: this.state.company,
    };
    this.props.addOffice(data);
  }

  render() {
    return (
      <div className="container">
        <h3 className="text-muted">Create Office</h3>
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
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="" className="text-muted">
              Location :
            </label>
            <div className="d-flex flex-row">
              <input
                type="number"
                id="latitude"
                name="latitude"
                className="form-control mr-2"
                placeholder="Latitude"
                onChange={this.onChange}
                required
                value={this.state.latitude}
              />
              <input
                type="number"
                id="longitude"
                name="longitude"
                className="form-control"
                placeholder="Longitude"
                onChange={this.onChange}
                value={this.state.longitude}
                required
              />
            </div>
          </div>
          <label htmlFor="office_start_date" className="text-muted">
            Office Start Date :
          </label>
          <div className="form-group">
            <input
              type="date"
              className="form-control"
              name="office_start_date"
              id="office_start_date"
              value={this.state.office_start_date}
              onChange={this.onChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="company" className="text-muted">
              Company :
            </label>
            <select
              className="form-control"
              id="company"
              name="company"
              value={this.state.company}
              onChange={this.onChange}
              required
            >
              {this.props.companies !== null &&
              this.props.companies.length > 0 ? (
                <option value="" disabled>
                  Choose company ..
                </option>
              ) : (
                <option value="" disabled>
                  Not yet company ..
                </option>
              )}

              {this.props.companies !== null
                ? this.props.companies.map((cmp) => (
                    <option value={cmp._id}>{cmp.name}</option>
                  ))
                : null}
            </select>
          </div>
          <button
            type="submit"
            style={{ backgroundColor: "#dee2e6" }}
            className="btn btn-lg btn-block"
            data-toggle="tooltip"
            data-placement="top"
            title="Submit"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

OfficeForm.propTypes = {
  addOffice: PropTypes.func.isRequired,
};

export default connect(null, { addOffice })(OfficeForm);
