import axios from "axios";

import { GET_ERRORS, GET_COMPANIES, GET_COMPANY } from "./types";

export const getCompanies = () => (dispatch) => {
  axios
    .get("/api/company/")
    .then((res) =>
      dispatch({
        type: GET_COMPANIES,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

export const getCompany = (id) => (dispatch) => {
  axios
    .get(`/api/company/${id}`)
    .then((res) =>
      dispatch({
        type: GET_COMPANY,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

export const addCompany = (data) => (dispatch) => {
  axios
    .post("/api/company/add", data)
    .then(() => {
      alert("Add Company Success!");
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const delCompany = (id) => (dispatch) => {
  dispatch(getCompanies());
  axios
    .delete(`/api/company/delete/${id}`)
    .then(() => {
      dispatch(getCompanies());
      alert("Delete Company Succes!");
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};
