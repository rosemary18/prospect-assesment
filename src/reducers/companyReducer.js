import { GET_COMPANY } from "../actions/types";

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_COMPANY:
      return action.payload;
    default:
      return state;
  }
}
