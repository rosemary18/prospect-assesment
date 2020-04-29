import axios from "axios";
import { GET_ERRORS } from "./types";
import { getCompany } from "./companyActions";

// @Action add ofice
export const addOffice = (data) => (dispatch) => {
  axios
    .post("/api/office/add", data)
    .then((res) => {
      alert(`Add office ${res.data.msg}!`);
    })
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

// @Action delete ofice
export const delOffice = (cmp_id, office_id) => (dispatch) => {
  axios
    .delete(`/api/office/delete/${cmp_id}/${office_id}`)
    .then((res) => {
      dispatch(getCompany(cmp_id));
      alert(`Delete office ${res.data.msg}!`);
    })
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};
