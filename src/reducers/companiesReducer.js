import { GET_COMPANIES } from "../actions/types";

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_COMPANIES:
      return action.payload;
    default:
      return state;
  }
}
