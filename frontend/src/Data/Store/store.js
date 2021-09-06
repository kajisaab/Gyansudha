import { createStore } from "redux";
import rootReducers from "../reducers/schooldetailsreducer";

// we need to create reducer

// creating store

const store = createStore(rootReducers);

export default store;
