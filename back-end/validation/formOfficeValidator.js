const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateOfficeInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.latitude = !isEmpty(data.latitude) ? data.latitude : "";
  data.longitude = !isEmpty(data.longitude) ? data.longitude : "";
  data.office_start_date = !isEmpty(data.office_start_date)
    ? data.office_start_date
    : "";
  data.company = !isEmpty(data.company) ? data.company : "";

  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }
  if (isEmpty(data.latitude)) {
    errors.latitude = "Latitude field is required";
  }
  if (isEmpty(data.longitude)) {
    errors.longitude = "Longitude field is required";
  }
  if (Validator.isEmpty(data.office_start_date)) {
    errors.office_start_date = "Office Start Date field is required";
  }
  if (isEmpty(data.company)) {
    errors.company = "Company field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
