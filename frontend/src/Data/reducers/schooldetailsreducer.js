import { combineReducers } from "redux";

// create reducer
const initialSchoolName = {
  Schooldetails: [],
};
function schoolDetailReducer(state = initialSchoolName, action) {
  switch (action.type) {
    case "UPDATE_SCHOOLNAME":
      return {
        ...state,
        Schooldetails: action.payload,
      };

    default:
      return state;
  }
}

// combining all reducers to one
const rootReducers = combineReducers({
  schoolDetailReducer,
});

export default rootReducers;
