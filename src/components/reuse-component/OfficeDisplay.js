import React, { Component } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { delOffice } from "../../actions/officeActions";

export class OfficeDisplay extends Component {
  render() {
    return (
      <div className="col-sm-6 p-0">
        {Object.keys(this.props.office).length !== 0 ? (
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
                <h5 className="card-title m-0 text-muted">
                  {this.props.office.name}
                </h5>
                <Link
                  className="ml-auto"
                  style={{ textDecoration: "none", color: "#000" }}
                  onClick={() =>
                    this.props.delOffice(
                      this.props.cmp_id,
                      this.props.office._id
                    )
                  }
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Delete ?"
                >
                  <h4>&times;</h4>
                </Link>
              </div>
              <hr className="mt-0" />
              <div className="container">
                <h5 className="mb-0">Location :</h5>
                <p className="text-muted m-0">
                  Lat - {this.props.office.location.latitude}
                </p>
                <p className="text-muted mt-0">
                  Long - {this.props.office.location.longitude}
                </p>
                <h5 className="mb-0">Office Start Date :</h5>
                <p className="text-muted mt-0">
                  {moment(this.props.office.office_start_date).format("L")}
                </p>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}
OfficeDisplay.propTypes = {
  delOffice: PropTypes.func.isRequired,
};
export default connect(null, { delOffice })(OfficeDisplay);
