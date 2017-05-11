import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import {middleware as awaitMiddleware} from 'redux-await';
import rootReducers from "./reducers";

export default function create(initialState = {}) {
  var devTool = f => f;
  if (typeof window !== "undefined") {
    devTool = window.devToolsExtension ? window.devToolsExtension() : f => f;
  }
  return createStore(
    combineReducers(rootReducers),
    initialState,
    compose(applyMiddleware(thunkMiddleware, awaitMiddleware), devTool)
  );
}
