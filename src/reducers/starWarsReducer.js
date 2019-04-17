import { FETCH_API, FETCH_SUCCESS, FETCH_FAIL } from "../actions";
const initialState = {
  characters: [],
  fetching: false,
  error: null
};
export const charsReducer = (state = initialState, action) => {
  console.log("actions", action.payload);
  switch (action.type) {
    case FETCH_API:
      return {
        ...state,
        fetching: true,
        error: ""
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        characters: action.payload,
        fetching: false
      };
    case FETCH_FAIL:
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};
