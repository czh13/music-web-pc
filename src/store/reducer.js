import { combineReducers } from "redux";
import { reducer as recommendReducer } from "../pages/news/c-pages/recommend/store";

const cReducer = combineReducers({
  recommend: recommendReducer,
});

export default cReducer;
