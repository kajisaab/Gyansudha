import { combineReducers } from "redux";

// create reducer
const initialschooldetails = {
  title: "random",
  content: "This is working",
};
function schoolDetailReducer(state = initialschooldetails, action) {
  switch (action.type) {
    case "UPDATE_DETAILS":
      return {
        ...state,
        state: action.payload,
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
