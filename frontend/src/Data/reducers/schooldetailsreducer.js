import { combineReducers } from "redux";

// create reducer
const initialSchoolName = {
  SchoolName: "",
  logo: "",
  Address: "",
};
function schoolDetailReducer(state = initialSchoolName, action) {
  switch (action.type) {
    case "UPDATE_SCHOOLNAME":
      return {
        ...state,
        SchoolName: action.payload.SchoolName,
        logo: action.payload.ImageUrl,
        Address: action.payload.Address,
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
