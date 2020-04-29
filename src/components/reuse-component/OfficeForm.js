import React, { Component } from "react";
export class OfficeForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      latitude: "",
      longitude: "",
      office_start_date: Date.now(),
      company: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {}

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
            />
          </div>
          <div className="form-group">
            <label htmlFor="" className="text-muted">
              Location :
            </label>
            <div className="d-flex flex-row">
              <input
                type="text"
                id="latitude"
                name="latitude"
                className="form-control mr-2"
                placeholder="Latitude"
                onChange={this.onChange}
                value={this.state.latitude}
              />
              <input
                type="text"
                id="longitude"
                name="longitude"
                className="form-control"
                placeholder="Longitude"
                onChange={this.onChange}
                value={this.state.longitude}
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
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default OfficeForm;
