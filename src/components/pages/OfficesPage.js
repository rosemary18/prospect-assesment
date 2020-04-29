import React, { Component } from "react";
import { Link } from "react-router-dom";
import { OfficeDisplay } from "../reuse-component";
import { connect } from "react-redux";
import { getCompany } from "../../actions/companyActions";
import PropTypes from "prop-types";

export class OfficesPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cmp: null,
    };
  }

  componentDidMount() {
    this.props.getCompany(this.props.match.params.company_id);
  }
  render() {
    return (
      <div
        className="container mt-4 mb-4 p-3 border"
        style={{
          borderRadius: 10,
        }}
      >
        {Object.keys(this.props.company).length !== 0 ? (
          <div className="row">
            <div className="col-sm">
              <h3 className="text-muted">{this.props.company.name}</h3>
              <hr />
              <h6 className="text-dark m-0">Address :</h6>
              <p className="text-muted">{this.props.company.address}</p>
              <h6 className="text-dark m-0">Revenue :</h6>
              <p className="text-muted">{this.props.company.revenue}</p>
              <div className="row">
                <div className="col-sm-8">
                  <h6 className="text-dark m-0">Phone :</h6>
                  <p className="text-muted">{this.props.company.phone}</p>
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
                {this.props.company.offices.length > 0 ? (
                  this.props.company.offices.map((office) => (
                    <OfficeDisplay
                      office={office}
                      cmp_id={this.props.company._id}
                    />
                  ))
                ) : (
                  <p className="">No office yet</p>
                )}
              </div>
            </div>
          </div>
        ) : (
          <p className="">Loading ...</p>
        )}
      </div>
    );
  }
}

OfficesPage.propTypes = {
  getCompany: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  error: state.error,
  company: state.company,
  companies: state.companies,
});
export default connect(mapStateToProps, { getCompany })(OfficesPage);
