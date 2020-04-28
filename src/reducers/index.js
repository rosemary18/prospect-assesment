import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import companyReducer from "./companyReducer";
import companiesReducer from "./companiesReducer";

export default combineReducers({
  errors: errorReducer,
  company: companyReducer,
  companies: companiesReducer,
});
