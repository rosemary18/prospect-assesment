import React, { Component } from "react";
import { CompanyForm, CompanyDisplay, OfficeForm } from "../reuse-component";
import { connect } from "react-redux";

export class OverviewPage extends Component {
  render() {
    return (
      <div
        className="container mt-4 mb-4 p-4 border"
        style={{
          borderRadius: 10,
        }}
      >
        <div className="row">
          <div className="col-sm">
            <CompanyForm />
          </div>
          <div
            style={{ backgroundColor: "#dee2e6", height: "auto", width: 1 }}
          />
          <div className="col-sm">
            <OfficeForm
              companies={
                Object.keys(this.props.companies).length !== 0
                  ? this.props.companies
                  : null
              }
            />
          </div>
        </div>
        <hr />
        <h3 className="text-muted">Companies</h3>
        <div className="d-flex flex-row flex-wrap p-0">
          {Object.keys(this.props.companies).length !== 0
            ? this.props.companies.map((cmp) => (
                <CompanyDisplay company={cmp} />
              ))
            : "Not yet company"}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  error: state.error,
  company: state.company,
  companies: state.companies,
});
export default connect(mapStateToProps)(OverviewPage);
