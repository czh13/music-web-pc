import { createStore,applyMiddleware,compose } from "redux";
import reducer from "./reducer";
import thunk from 'redux-thunk';

// 为了让redux-devtools可以使用
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer,composeEnhancers(
  applyMiddleware(thunk)
  // applyMiddleware(thunk,saga) 中间件，可以传多个
));

export default store
