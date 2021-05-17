import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "./modules";

let composeEnhancer = compose;

composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose;

function create(initialState = {}) {
  return createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
  );
}
export default create;
