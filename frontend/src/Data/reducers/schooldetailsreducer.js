import { combineReducers } from "redux";

// create reducer
const initialSchoolName = {
  SchoolName: "",
  logo: "",
};
function schoolDetailReducer(state = initialSchoolName, action) {
  switch (action.type) {
    case "UPDATE_SCHOOLNAME":
      return {
        ...state,
        SchoolName: action.payload.SchoolName,
        logo: action.payload.logo,
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
