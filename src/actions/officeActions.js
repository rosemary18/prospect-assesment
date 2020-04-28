import axios from "axios";
export const addOffice = (data) => (dispatch) => {
  axios
    .get("/api/office/add", data)
    .then((res) => alert(res.data.msg))
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};
