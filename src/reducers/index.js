import { combineReducers } from "redux";
import movieReducer from './reducer'

export default combineReducers({
   movie: movieReducer
})