const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateCompanyInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.address = !isEmpty(data.address) ? data.address : "";
  data.revenue = !isEmpty(data.revenue) ? data.revenue : "";
  data.phone = !isEmpty(data.phone) ? data.phone : "";

  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }
  if (Validator.isEmpty(data.address)) {
    errors.address = "Address field is required";
  }
  if (isEmpty(data.revenue)) {
    errors.revenue = "Revenue field is required";
  }
  if (Validator.isEmpty(data.phone)) {
    errors.phone = "Phone field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
