import { combineReducers } from "redux";
import UserReducer from "./UserReducer";
import DataReducer from "./DataReducer";

const rootReducers = combineReducers({
  UserReducer,
  DataReducer
});

export default rootReducers;
