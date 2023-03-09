import middleware from "./middleware";
import { createStore, combineReducers } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import movieReducer from "./reducers";
const reducer = combineReducers({
  movieReducer,
});
// console.log(reducer.getState(),"jjj")
export const store = createStore(reducer,
  
  middleware);
  console.log(store.getState())

export default store;
