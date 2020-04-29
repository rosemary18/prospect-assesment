import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { delCompany } from "../../actions/companyActions";
import { Link } from "react-router-dom";

export class CompanyDisplay extends Component {
  render() {
    const cmp = this.props.company;
    return (
      <div className="col-sm-6">
        <Link to="/company" style={{ textDecoration: "none", color: "#000" }}>
          <div
            className="card rounded"
            style={{
              width: "30rem",
              margin: "auto",
              marginBottom: 10,
              marginTop: 10,
            }}
          >
            <div className="card-body p-2">
              <div className="d-flex flex-row align-items-center">
                <h5 className="card-title m-0 text-muted">{cmp.name}</h5>

                <Link
                  className="ml-auto"
                  style={{ textDecoration: "none", color: "#404040" }}
                  onClick={() => this.props.delCompany(cmp._id)}
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Delete"
                >
                  <h4>&times;</h4>
                </Link>
              </div>
              <hr className="mt-0" />
              <div className="card-text">
                <h6>Address :</h6>
                <p className="text-muted">{cmp.address}</p>
                <h6>Revenue :</h6>
                <p className="text-muted">{cmp.revenue}</p>
                <h6>Phone No :</h6>
                <p className="text-muted">{cmp.phone}</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}
CompanyDisplay.propTypes = {
  delCompany: PropTypes.func.isRequired,
};
export default connect(null, { delCompany })(CompanyDisplay);
