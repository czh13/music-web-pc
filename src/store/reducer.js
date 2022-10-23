
// import { combineReducers } from "redux";
import { combineReducers } from "redux-immutable";

import { reducer as recommendReducer } from "../pages/news/c-pages/recommend/store";

// cReducer最终也是一个对象，所以也需要immutable进行处理
// 可以使用redux-immutable的combineReducers处理成immutable对象，此时取值和修改的方式也不一样了
//redux的combineReducers其原理是通过object.keys进行取值遍历
const cReducer = combineReducers({ 
  recommend: recommendReducer,
});

export default cReducer;
