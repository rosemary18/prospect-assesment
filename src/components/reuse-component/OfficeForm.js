import React, { Component } from "react";
import DatePicker from "react-bootstrap-date-picker";
export class OfficeForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      office_start_date: "",
    };
  }

  render() {
    return (
      <div className="container">
        <h3 className="text-muted">Create Office</h3>
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
            <label htmlFor="" className="text-muted">
              Location :
            </label>
            <div className="d-flex flex-row">
              <input
                type="text"
                id="latitude"
                className="form-control mr-2"
                placeholder="Latitude"
              />
              <input
                type="text"
                id="longitude"
                className="form-control"
                placeholder="Longitude"
              />
            </div>
          </div>
          <label htmlFor="office_start_date" className="text-muted">
            Office Start Date :
          </label>
          <div className="form-group">
            <DatePicker />
          </div>
          <div class="form-group">
            <label for="company" className="text-muted">
              Company :
            </label>
            <select class="form-control" id="company">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
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
